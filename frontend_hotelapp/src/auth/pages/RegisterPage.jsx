import { useState } from "react";
import { NavBar } from "../../components/layout/NavBar"
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

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
                'Email y contraseña requeridos',
                'error'
            );
            return;
        }

        if (contrasenia.length < 5) {
            Swal.fire(
                'Error de validación',
                'La contraseña debe tener al menos 5 caracteres.',
                'error'
            );
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(contrasenia)) {
            Swal.fire(
                'Error de validación',
                'La contraseña debe contener al menos una letra minúscula, una mayúscula y un número.',
                'error'
            );
            return;
        }


        handlerRegister({ email, contrasenia });
        setLoginForm(initialLoginForm);
    }

    return (
        <>
            <NavBar />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg bg-dark text-white p-4 rounded-3xl w-100" style={{ maxWidth: '500px' }}>
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
                            <button className="btn btn-primary w-100" type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}