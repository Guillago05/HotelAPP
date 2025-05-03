import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const storedLogin = JSON.parse(sessionStorage.getItem("login")) || {
        isAuth: false,
        user: null
    };

    return storedLogin.isAuth ? children : <Navigate to="/home" />;
};