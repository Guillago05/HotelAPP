import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/authService";
import { authReducer } from "../reducers/authReducer";
import Swal from "sweetalert2";



const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isUser: false,
    email: undefined,
}

export const useAuth = () => {

    const [login, dispach] = useReducer(authReducer, initialLogin);
    const navigate = useNavigate();
    const handlerLogin = async ({ email, contrasenia }) => {
        try {
            const response = await loginUser({ email, contrasenia });
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            dispach({
                type: "login",
                payload: { email, isUser: claims.isUser }
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isUser: claims.isAdmin,
                email: email
            }));
            navigate('/home')
        } catch (error) {
            if (error.response?.status == 401) {
                Swal.fire(
                    'Error de validacion',
                    'Correo o contrasenia invalidos',
                    'error'
                );
            } else if (error.response?.status == 403) {
                Swal.fire(
                    'Error de validacion',
                    'No tiene acceso al recurso',
                    'error'
                );
            } else {
                throw error;
            }
        }

    }

    const handlerRegister = async ({ email, contrasenia }) => {
        try {
            const response = await registerUser({ email, contrasenia });
            await handlerLogin({ email, contrasenia });
            navigate("/home")
        } catch (error) {
            if (error.response?.status == 500) {
                Swal.fire(
                    'Error',
                    'El correo ya esta registrado en el sistema',
                    'error'
                );
            }
        }
    }

    const handlerLogout = () => {
        dispach({
            type: "logout",
        });
        sessionStorage.removeItem('login');
        navigate("/home")
        window.location.reload();
    };

    return {
        login,
        initialLogin,
        handlerLogin,
        handlerLogout,
        handlerRegister
    }
}