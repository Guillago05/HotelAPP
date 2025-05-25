import { useState } from "react";
import { NavBar } from "../components/layout/NavBar"
import { modificarDatosUsuario } from "../services/UsuarioService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialUserData = {
    nombre: "",
    apellidos: "",
    dni: "",
    telefono: ""
}
const storedLogin = JSON.parse(sessionStorage.getItem("login"));


const initialContrasenia = "";

export const EditarPerfilPage = () => {
    const [formData, setFormData] = useState(initialUserData);
    const { nombre, apellidos, dni, telefono } = formData;
    const [contrasenia, setContrasenia] = useState(initialContrasenia);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const isNombreEmpty = !nombre || !nombre.trim();
        const isApellidosEmpty = !apellidos || !apellidos.trim();
        const isContraseniaEmpty = !contrasenia || !contrasenia.trim();
        const isDniEmpty = !dni || !dni.trim();
        const isTelefonoEmpty = !telefono || !telefono.trim();

        if (isNombreEmpty && isApellidosEmpty && isContraseniaEmpty && isDniEmpty && isTelefonoEmpty) {
            Swal.fire(
                'Error de validacion',
                'Atributos requeridos',
                'error'
            );
        }

        const usuario = {
            email: storedLogin?.email,
            nombre: nombre,
            apellidos: apellidos,
            contrasenia: contrasenia,
            dni: dni,
            telefono: telefono,
        }
        modificarDatosUsuario(usuario);

        setFormData(initialUserData);
        setContrasenia(initialContrasenia);
        navigate("/home");
        Swal.fire("Tus datos han sido modificados", "", "success");
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        if (name === 'contrasenia') {
            setContrasenia(value);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }

    return (
        <>
            <NavBar />
            <div className="container mt-3 d-flex justify-content-center">
                <div className="card shadow-lg bg-dark text-white p-4 rounded-3xl w-100" style={{ maxWidth: '500px' }}>
                    <h2 className="text-center">Modifica tus datos personales</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                            <label className="form-label text-white">Nombre</label>
                            <input type="text" name="nombre" className="form-control bg-dark text-white border-light" value={formData.nombre} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Apellidos</label>
                            <input type="text" name="apellidos" className="form-control bg-dark text-white border-light" value={formData.apellidos} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Contraseña</label>
                            <input type="password" name="contrasenia" className="form-control bg-dark text-white border-light" value={contrasenia} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">DNI</label>
                            <input type="text" name="dni" className="form-control bg-dark text-white border-light" value={formData.dni} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Teléfono</label>
                            <input type="text" name="telefono" className="form-control bg-dark text-white border-light" value={formData.telefono} onChange={onInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Continuar</button>
                    </form>
                </div>
            </div>

        </>
    )
}