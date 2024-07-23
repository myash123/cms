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

    const loginUser = async (userData: registerUserDataType): Promise<boolean> => {
        console.log(userData);
        try {
            await axios.post(loginUserEndpoint, userData);
            console.log('Successfully logged in user', userData.username);
            return true;
        } catch (error) {
            console.error('Error logging user in', error);
            return false;
        }
    }

    const verifyUser = async (): Promise<Boolean> => {
        try {
            const response = await axios.get(verifyUserEndpoint, {
                withCredentials: true,
            });
            console.log(response);
            return response.status === 200;
        } catch (error) {
            console.error('Error verifying user', error);
            return false;
        }
    }

    return { registerUser, verifyUser, loginUser }
}

export default authService;