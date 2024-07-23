import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import authService from "../services/AuthService";

type User = {
    username: string;
    password: string;
};

type AuthContextType = {
    user: User | null;
    login: (userData: User) => Promise<boolean>;
    logout: () => void;
    verifyUser: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        if (token) {
            verifyUser();
        }
    }, []);

    const login = async (userData: User): Promise<boolean> => {
        const successful = await authService().loginUser(userData);
        if (successful) {
            setUser(userData);
            Cookies.set("jwtToken", userData.username, { expires: 7 });
        }
        return successful;
    };

    const logout = () => {
        setUser(null);
        Cookies.remove("jwtToken");
    };

    const verifyUser = async () => {
        const result = await authService().verifyUser();
        if (result) {
            const savedUser = Cookies.get("jwtToken");
            if (savedUser) {
                setUser({ username: savedUser, password: "" });
            }
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, verifyUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
