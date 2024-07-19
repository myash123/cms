import axios from "axios";

type registerUserDataType = {
    username: string,
    password: string
}

const registerUserEndpoint = import.meta.env.VITE_REGISTER_URL;
const verifyUserEndpoint = import.meta.env.VITE_VERIFY_USER_URL;
const loginUserEndpoint = import.meta.env.VITE_LOGIN_USER_URL;

const authService = () => {
    const registerUser = async (userData: registerUserDataType) => {
        try {
            const response = await axios.post(registerUserEndpoint, userData);
            console.log('Post created', response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }

    const loginUser = async (userData: registerUserDataType) => {
        try {
            await axios.post(loginUserEndpoint, userData);
            console.log('Successfully logged in user', userData.username);
        } catch (error) {
            console.error('Error logging user in', error);
        }
    }

    const verifyUser = async () => {
        try {
            const response = await axios.get(verifyUserEndpoint, {
                withCredentials: true,
            });
            console.log(response);
        } catch (error) {
            console.error('Error verifying user', error);
        }
    }

    return { registerUser, verifyUser, loginUser }
}

export default authService;