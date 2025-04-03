import { useState } from "react";
import { NavBar } from "../../components/layout/NavBar"
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";

const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = () => {

    const { handlerLogin } = useAuth();
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();//Para que no se actualice la pagina
        if (!username || !password) {
            Swal.fire(
                'Error de validacion',
                'Username y password requeridos',
                'error'
            );
        }

        handlerLogin({ username, password });

        setLoginForm(initialLoginForm);
    }

    return (
        <>
            <NavBar />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-5 shadow-lg" style={{ width: "450px" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Username"
                                name="username" value={username} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Password" name="password"
                                type="password" value={password} onChange={onInputChange} />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}