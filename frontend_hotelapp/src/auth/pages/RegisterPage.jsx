import { useState } from "react";
import { NavBar } from "../../components/layout/NavBar"
import { useAuth } from "../hooks/useAuth";

const initialLoginForm = {
    email: '',
    contrasenia: '',
}

export const RegisterPage = () => {

    const { handlerRegister } = useAuth();
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { email, contrasenia } = loginForm;

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();//Para que no se actualice la pagina
        if (!email || !contrasenia) {
            Swal.fire(
                'Error de validacion',
                'Username y password requeridos',
                'error'
            );
        }

        handlerRegister({ email, contrasenia });
        setLoginForm(initialLoginForm);
    }

    return (
        <>
            <NavBar />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-5 shadow-lg" style={{ width: "450px" }}>
                    <h2 className="text-center mb-4">Registrate</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Email"
                                name="email" value={email} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Contraseña" name="contrasenia"
                                type="password" value={contrasenia} onChange={onInputChange} />
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