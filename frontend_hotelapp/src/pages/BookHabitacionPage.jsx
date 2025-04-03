import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { reservarHabitacion } from "../services/ReservaService";

const initialUserData = {
    nombre: "",
    apellidos: "",
    email: "",
    dni: "",
    telefono: ""
}

const loginData = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const BookHabitacionPage = () => {
    const [formData, setFormData] = useState(initialUserData);

    const { nombre, apellidos, email, dni, telefono } = formData;

    const location = useLocation();
    const hotel = location.state?.hotel;
    const fecha_llegada = location.state?.fecha_llegada;
    const fecha_salida = location.state?.fecha_salida;
    const personas = location.state?.personas;
    const habitacion = location.state?.habitacion;

    const handleSubmit = (event) => {
        event.preventDefault();//Para que no se actualice la pagina
        if (!nombre || !apellidos || !email || !dni || !telefono) {
            Swal.fire(
                'Error de validacion',
                'Atributos requeridos',
                'error'
            );
        }
        reservarHabitacion({
            nombre, apellidos, email,
            dni, telefono, hotel, habitacion,
            fecha_llegada, fecha_salida, personas
        })

        setFormData(initialUserData);
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    return (
        <>
            <div className="container mt-5">
                <h2>Introduce tus datos personales</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={onInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellidos</label>
                        <input type="text" name="apellidos" className="form-control" value={formData.apellidos} onChange={onInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={onInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">DNI</label>
                        <input type="text" name="dni" className="form-control" value={formData.dni} onChange={onInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="tel" name="telefono" className="form-control" value={formData.telefono} onChange={onInputChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Continuar</button>
                </form>
            </div>
        </>
    )
}