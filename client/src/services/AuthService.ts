import axios from "axios";

type registerUserDataType = {
    username: string,
    password: string
}

const registerUserEndpoint = import.meta.env.VITE_REGISTER_URL;
const verifyUserEndpoint = import.meta.env.VITE_VERIFY_USER_URL;

const authService = () => {
    
    const registerUser = async (userData: registerUserDataType) => {
        try {
            const response = await axios.post(registerUserEndpoint, userData);
            console.log('Post created', response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }

    const verifyUser = async (token: string) => {
        try {
            const response = await axios.get(verifyUserEndpoint, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true,
            });
            console.log(response, token);
        } catch (error) {
            console.error('Error verifying user', error);
        }
    }

    return { registerUser, verifyUser }
}

export default authService;