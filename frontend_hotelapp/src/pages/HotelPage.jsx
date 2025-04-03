import { useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../components/layout/NavBar"
import { useEffect, useState } from "react";
import { getHabitaciones } from "../services/HotelService";


export const HotelPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const hotel = location.state?.hotel;
    const fecha_llegada = location.state?.fecha_llegada;
    const fecha_salida = location.state?.fecha_salida;
    const personas = location.state?.personas;
    const duracionEstancia = Math.ceil((new Date(fecha_salida) - new Date(fecha_llegada)) / (1000 * 3600 * 24));

    const [habitaciones, setHabitaciones] = useState([]);

    const reservarHabitacion = (habitacion) => {
        navigate(`/hotel/${hotel.nombre}/book`, { state: { hotel, fecha_llegada, fecha_salida, personas, habitacion } });
    }

    const findHabitaciones = async () => {
        const habitacionesDisp = await getHabitaciones(hotel.nombre, fecha_llegada, fecha_salida, personas);
        setHabitaciones(habitacionesDisp);
    }

    useEffect(() => {
        findHabitaciones();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h2>{hotel?.nombre}</h2>
                <p><strong>Dirección:</strong> {hotel?.direccion}</p>
                <div className="row mb-4">
                    <div className="col">
                        <h5>Imágenes del Hotel</h5>
                        <div className="d-flex gap-3">
                            <div className="img-thumbnail" style={{ width: "200px", height: "150px", backgroundColor: "#ccc" }}></div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h5>Descripción:</h5>
                    <p>{hotel?.descripcion}</p>
                </div>
                <h5>Disponibilidad</h5>
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Habitación</th>
                            <th className="text-center" scope="col">Precio para {duracionEstancia} noches</th>
                            <th className="text-center" scope="col">Reservar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí se generan las filas dinámicamente */}
                        {/* Ejemplo de fila: */}
                        {/* habitaciones?.map((habitacion) => ( */}
                        {habitaciones.map((habitacion) => (
                            <tr key={habitacion.id}>
                                <td className="text-center">{habitacion.numero}</td>
                                <td className="text-center">{duracionEstancia * habitacion.precio_noche}€</td>
                                <td className="text-center">
                                    <button className="btn btn-primary" onClick={() => reservarHabitacion(habitacion)}>Reservar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}