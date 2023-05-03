import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

const TOKEN_KEY = 'meu_token';

export const isAuthenticated = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return token !== null;
};

export const getToken = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
};

export const AuthProvider = ({children}) => {
    const [token,
        setToken] = useState(getToken());
    const isAuthenticatedValue = token
        ? true
        : false;

    const handleLogin = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    };

    const handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
            isAuthenticated: isAuthenticatedValue,
            token: token,
            login: handleLogin,
            logout: handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
