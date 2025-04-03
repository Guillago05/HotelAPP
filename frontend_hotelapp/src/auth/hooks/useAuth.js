import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { authReducer } from "../reducers/authReducer";



const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {

    const [login, dispach] = useReducer(authReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = ({ username, password }) => {
        if (loginUser({ username, password })) {
            const user = { username: 'admin', email: 'admin@correo.com' }
            dispach({
                type: "login",
                payload: user,
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user: user
            }));
            navigate("/home")
        } else {
            Swal.fire(
                'Error de validacion',
                'Username o password invalidos',
                'error'
            );
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
        handlerLogout
    }
}