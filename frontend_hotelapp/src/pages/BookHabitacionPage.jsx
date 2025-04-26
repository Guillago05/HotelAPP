import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { reservarHabitacionNoReg, reservarHabitacionReg } from "../services/ReservaService";
import { getUsuarioPorCorreo, ponerPuntosA0 } from "../services/UsuarioService";
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
    const { nombre, apellidos, email, dni, telefono } = formData;

    const [loginData, setLoginData] = useState({
        isAuth: false,
        user: undefined
    });

    const [puntos, setPuntos] = useState(0);

    const [puntosAplicados, setPuntosAplicados] = useState(false);

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
            setPuntos(usuario.puntos);
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
    const hotel = location.state?.hotel;
    const id_hotel = hotel.id;
    const fecha_llegada = location.state?.fecha_llegada;
    const fecha_salida = location.state?.fecha_salida;
    const personas = location.state?.personas;
    const habitacion = location.state?.habitacion
    const id_habitacion = habitacion.id;

    //Calculo de precio de estancia
    const llegada = new Date(fecha_llegada);
    const salida = new Date(fecha_salida);
    const duracionEstancia = Math.ceil((salida - llegada) / (1000 * 3600 * 24));
    const precioInicial = habitacion.precio_noche * duracionEstancia;

    const [precioEstancia, setPrecioEstancia] = useState(precioInicial);

    const aplicarPuntos = (event) => {
        event.preventDefault();//Para que no se actualice la pagina
        if (!puntosAplicados) {
            const precioConPuntos = precioEstancia - puntos / 10;
            setPrecioEstancia(precioConPuntos);
        } else {
            const precioSinPuntos = precioEstancia + puntos / 10;
            setPrecioEstancia(precioSinPuntos);
        }

        setPuntosAplicados(!puntosAplicados);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();//Para que no se actualice la pagina
        if (!nombre || !apellidos || !email || !dni || !telefono) {
            Swal.fire(
                'Error de validacion',
                'Atributos requeridos',
                'error'
            );
        }

        if (loginData.isAuth) {
            if (puntosAplicados) await ponerPuntosA0(loginData.user.id);
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
                precioEstancia: precioEstancia,
            }

            await reservarHabitacionReg(reserva);
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
                precioEstancia: precioEstancia,
            }
            await reservarHabitacionNoReg(reserva);
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

            {/* Contenedor Principal con Grid */}
            <div className="container mt-4"> {/* Aumentado margen superior */}
                <div className="row justify-content-center g-4"> {/* g-4 añade espacio entre columnas */}

                    {/* Columna Izquierda: Resumen */}
                    <div className="col-lg-5 col-md-6 order-md-1"> {/* order-md-1 asegura que vaya a la izquierda en pantallas medianas+ */}
                        <div className="card shadow-lg bg-dark text-white p-4 rounded-3xl">
                            <h4 className="mb-3 fw-bold">Resumen de tu Reserva</h4> {/* Título en negrita */}
                            <p className="mb-2"> {/* Reducido margen inferior */}
                                Vas a reservar en{' '}
                                <strong className="text-info">{hotel?.nombre || 'Nombre del Hotel'}</strong>{' '}
                                para <strong>{personas || 'N/A'}</strong> persona(s).
                            </p>
                            <p className="mb-1">
                                <strong>Llegada:</strong> {fecha_llegada || 'Fecha no especificada'}
                            </p>
                            <p className="mb-3"> {/* Aumentado margen inferior antes del hr */}
                                <strong>Salida:</strong> {fecha_salida || 'Fecha no especificada'}
                            </p>
                            <hr className="border-light my-3" />
                            <p className="h5 mt-2 mb-0 fw-bold"> {/* mb-0 para quitar margen inferior si es el último elemento */}
                                Precio Total: <strong className="text-success">{precioEstancia} €</strong>
                            </p>
                            {loginData.isAuth && puntos > 0 ? (<>
                                <button type="submit" className="btn btn-primary w-100 mt-3" onClick={aplicarPuntos}> {/* Añadido mt-3 */}
                                    {!puntosAplicados ? `Aplicar ${puntos} ` : "Desaplicar "} puntos
                                </button>
                            </>) : ""}

                        </div>
                    </div>

                    {/* Columna Derecha: Formulario y Banner (si aplica) */}
                    <div className="col-lg-7 col-md-6 order-md-2"> {/* order-md-2 asegura que vaya a la derecha */}

                        {/* ====> Bloque de "Has iniciado sesión" MOVIDO AQUÍ <==== */}
                        {loginData.isAuth && loginData.user && (
                            <div className="card shadow-lg bg-dark text-white p-3 rounded-3xl w-100 mb-4"> {/* Añadido mb-4 para espacio */}
                                <div className="d-flex align-items-center gap-3">
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                        style={{ width: "40px", height: "40px", fontSize: "1.2rem", flexShrink: 0 }}>
                                        {/* Usar optional chaining por seguridad */}
                                        {String(loginData.user?.nombre || '?').charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="text-sm m-0">Has iniciado sesión como:</p>
                                        <span className="font-weight-bold">{loginData.user?.email}</span> {/* font-weight-bold es clase bootstrap */}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* ====> FIN Bloque movido <==== */}


                        {/* Card del Formulario */}
                        <div className="card shadow-lg bg-dark text-white p-4 rounded-3xl w-100">
                            <h2 className="text-center mb-4 fw-bold">{loginData.isAuth ? 'Confirma tus Datos' : 'Introduce tus Datos Personales'}</h2> {/* Título dinámico */}
                            <form onSubmit={handleSubmit}> {/* No necesita mt-4 si h2 tiene mb-4 */}
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" name="nombre" className="form-control bg-dark text-white border-secondary" value={nombre} onChange={onInputChange} required disabled={loginData.isAuth} /> {/* Cambiado border-light por border-secondary */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Apellidos</label>
                                    <input type="text" name="apellidos" className="form-control bg-dark text-white border-secondary" value={apellidos} onChange={onInputChange} required disabled={loginData.isAuth} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control bg-dark text-white border-secondary" value={email} onChange={onInputChange} required disabled={loginData.isAuth} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">DNI</label>
                                    <input type="text" name="dni" className="form-control bg-dark text-white border-secondary" value={dni} onChange={onInputChange} required disabled={loginData.isAuth} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input type="tel" name="telefono" className="form-control bg-dark text-white border-secondary" value={telefono} onChange={onInputChange} required disabled={loginData.isAuth} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3"> {/* Añadido mt-3 */}
                                    Confirmar Reserva
                                </button>
                            </form>
                        </div>
                    </div> {/* Fin Columna Derecha */}

                </div> {/* Fin .row */}
            </div> {/* Fin .container */}
        </>
    )
}