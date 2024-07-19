import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { writeUserToTempDb, readUsersFromDb, validateNewUser } from '../db/temp_db_service.js';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], 
    credentials: true, 
};

app.use(cors(corsOptions));
app.use(cookieParser());

dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
});


app.post("/register", async (req, res) => {

    const { username, password } = req.body;

    try {
        const path = process.env.DB_PATH;
        const userIsValidated = await validateNewUser(username, path);
        if (userIsValidated) {
            await writeUserToTempDb(username, password, path);
        } else {
            console.error('User validation failed');
        }
    } catch (error) {
        console.error('Failed to read user data:', error);
        res.status(500).send({ error: "Failed to process registration." });
    }


    const payload = {
        username,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
      };

    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, jwtSecretKey);
    
    res.cookie('jwtToken', token, {
        httpOnly: true,
        secure: true, 
        sameSite: 'lax' 
    });
    res.status(200).send({ success: true, token });
});

app.get("/verify-user", (req, res) => {
    const token = req.cookies['jwtToken'];

    if (token) {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const verified = jwt.verify(token, jwtSecretKey);
            if (verified) {
                console.log('JWT verified successfully. User data:', verified);
                return res.send("Successfully Verified");
            } else {
                return res.status(401).send("Verification failed");
            }
        } catch (error) {
            console.error("Verification error:", error);
            return res.status(401).send(error.message);
        }
    } else {
        console.log("No JWT found in cookies");
        return res.status(401).send("JWT must be provided");
    }
});
