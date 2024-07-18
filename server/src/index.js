const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
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

app.post("/register", (req, res) => {
    //TODO: validation against DB with hashed password
    // make sure user name is not already taken
    // if not, save username password to db
    // 
    const payload = {
        username: req.body.username,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
      };

    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(payload, jwtSecretKey);

    res.send(token);
});

app.get("/verify-user", (req, res) => {
    const authHeader = req.headers['authorization']; 
    console.log(authHeader);  

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7); 
        console.log(token); 

        const jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const verified = jwt.verify(token, jwtSecretKey);
            if (verified) {
                console.log('Cookies: ', req.cookies);
                res.cookie('jwtToken', token, {
                    httpOnly: true,
                    secure: true, // ensure cookie is sent over HTTPS
                    sameSite: 'lax' // strict or lax depending on your requirements
                });
                return res.send("Successfully Verified");
            } else {
                return res.status(401).send("Verification failed");
            }
        } catch (error) {
            console.error("Verification error:", error);
            return res.status(401).send(error.message);
        }
    } else {
        console.log("No Authorization header found");
        return res.status(401).send("JWT must be provided");
    }
});
