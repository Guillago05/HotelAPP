import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { reservarHabitacionNoReg, reservarHabitacionReg } from "../services/ReservaService";
import { getUsuarioPorCorreo } from "../services/UsuarioService";
import { NavBar } from "../components/layout/NavBar";


const initialUserData = {
    nombre: "",
    apellidos: "",
    email: "",
    dni: "",
    telefono: ""
}

export const BookHabitacionPage = () => {
    const [formData, setFormData] = useState(initialUserData);
    const [loginData, setLoginData] = useState({
        isAuth: false,
        user: undefined
    });
    const { nombre, apellidos, email, dni, telefono } = formData;

    const findUsuario = async (email) => {
        try {
            const usuario = await getUsuarioPorCorreo(email);
            setLoginData({
                isAuth: true,
                user: usuario
            });
            setFormData({
                nombre: usuario.nombre || "",
                apellidos: usuario.apellidos || "",
                email: usuario.email || "",
                dni: usuario.dni || "",
                telefono: usuario.telefono || ""
            });
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
        }
    };


    useEffect(() => {
        const storedLogin = JSON.parse(sessionStorage.getItem("login"));
        if (storedLogin?.isAuth && storedLogin?.email) {
            findUsuario(storedLogin.email);
        }
    }, []);

    const navigate = useNavigate();

    const location = useLocation();
    const id_hotel = location.state?.hotel.id;
    const fecha_llegada = location.state?.fecha_llegada;
    const fecha_salida = location.state?.fecha_salida;
    const personas = location.state?.personas;
    const id_habitacion = location.state?.habitacion.id;

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
        Swal.fire("Tu reserva se ha completado", "", "success");
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
            <NavBar />
            {loginData.isAuth && (
                <div className="container mt-3 d-flex justify-content-center">
                    <div className="card shadow-lg bg-dark text-white p-3 rounded-3xl w-100" style={{ maxWidth: '500px' }}>
                        <div className="d-flex align-items-center gap-3">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                style={{ width: "40px", height: "40px", fontSize: "1.2rem", flexShrink: 0 }}>
                                {String(loginData.user.nombre).charAt(0).toUpperCase() || "?"}
                            </div>
                            <div>
                                <p className="text-sm m-0">Has iniciado sesión</p>
                                <span className="font-normal">{loginData.user.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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