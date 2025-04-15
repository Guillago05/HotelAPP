import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reservarHabitacionNoReg, reservarHabitacionReg } from "../services/ReservaService";
import Swal from "sweetalert2";

const initialUserData = {
    nombre: "",
    apellidos: "",
    email: "",
    dni: "",
    telefono: ""
}

export const FormularioReserva = ({ id_hotel, fecha_llegada, fecha_salida,
    personas, id_habitacion, loginData }) => {

    const [formData, setFormData] = useState(initialUserData);
    const { nombre, apellidos, email, dni, telefono } = formData;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();//Para que no se actualice la pagina
        if (!nombre || !apellidos || !email || !dni || !telefono) {
            Swal.fire(
                'Error de validacion',
                'Atributos requeridos',
                'error'
            );
        }

        if (loginData.isAuth) {
            const reserva = {
                hotel: {
                    id: id_hotel,
                },
                habitacion: {
                    id: id_habitacion,
                },
                usuario: {
                    id: loginData.user.id,
                },
                fechaLlegada: fecha_llegada,
                fechaSalida: fecha_salida,
                personas: personas,
            }
            reservarHabitacionReg(reserva);
        } else {
            const reserva = {
                email_no_reg: email,
                nombre_no_reg: nombre,
                apellidos_no_reg: apellidos,
                dni_no_reg: dni,
                telefono_no_reg: telefono,
                hotel: {
                    id: id_hotel,
                },
                habitacion: {
                    id: id_habitacion,
                },
                fechaLlegada: fecha_llegada,
                fechaSalida: fecha_salida,
                personas: personas,
            }
            reservarHabitacionNoReg(reserva);
        }
        setFormData({
            nombre: "",
            apellidos: "",
            email: "",
            dni: "",
            telefono: ""
        });
        navigate("/home");

    }

    return (
        <>
            <div className="container mt-3 d-flex justify-content-center">
                <div className="card shadow-lg bg-dark text-white p-4 rounded-3xl w-100" style={{ maxWidth: '500px' }}>
                    <h2 className="text-center">Introduce tus datos personales</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                            <label className="form-label text-white">Nombre</label>
                            <input type="text" name="nombre" className="form-control bg-dark text-white border-light" value={formData.nombre} onChange={onInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Apellidos</label>
                            <input type="text" name="apellidos" className="form-control bg-dark text-white border-light" value={formData.apellidos} onChange={onInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Email</label>
                            <input type="email" name="email" className="form-control bg-dark text-white border-light" value={formData.email} onChange={onInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">DNI</label>
                            <input type="text" name="dni" className="form-control bg-dark text-white border-light" value={formData.dni} onChange={onInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Teléfono</label>
                            <input type="tel" name="telefono" className="form-control bg-dark text-white border-light" value={formData.telefono} onChange={onInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}