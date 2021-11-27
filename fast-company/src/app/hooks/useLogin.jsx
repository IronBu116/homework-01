import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
import { setTokens } from "../services/localStorage.service";
import userService from "../services/user.service";

const httpAuth = axios.create({});
const LoginContext = React.createContext();

export const useLogin = () => {
    return useContext(LoginContext);
};

const LoginProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState(null);

    async function signIn({ email, password }) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`;
        try {
            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            });
            setTokens(data);
            const { content } = await userService.getUserById(data.localId);
            setCurrentUser(content);
        } catch (error) {
            errorCatcher(error);
            const { code, message } = await error.response.data.error;
            if (code === 400) {
                if (message === "EMAIL_NOT_FOUND") {
                    const errorObject = {
                        email: "Пользователя с данным email не существует"
                    };
                    throw errorObject;
                } else if (message === "INVALID_PASSWORD") {
                    const errorObject = {
                        password: "Неверно введен пароль"
                    };
                    throw errorObject;
                }
            }
        }
    }

    function errorCatcher(error) {
        console.log(error);
        const { message } = error.response.data;
        setError(message);
    }

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <LoginContext.Provider value={{ signIn, currentUser }}>
            {children}
        </LoginContext.Provider>
    );
};

LoginProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default LoginProvider;
