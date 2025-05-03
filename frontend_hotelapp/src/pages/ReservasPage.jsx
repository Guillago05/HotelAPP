import { useEffect, useState } from "react";
import { NavBar } from "../components/layout/NavBar"
import { ReservaContainer } from "../components/ReservaContainer";
import { obtenerReservasPorUsuarioEmail } from "../services/ReservaService";

const storedLogin = JSON.parse(sessionStorage.getItem("login"));

export const ReservasPage = () => {

    const [reservas, setReservas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findReservas = async () => {
        const reservasUsuario = await obtenerReservasPorUsuarioEmail(storedLogin.email);
        setReservas(reservasUsuario);
        setIsLoading(false);
    }

    useEffect(() => {
        findReservas();
    }, []);
    return (<>
        <NavBar />
        <div className="container mt-5">
            <h1 className="text-center mb-4">Tus reservas</h1>

            {isLoading ? (
                <p className="text-center">Cargando...</p>
            ) : (
                <div className="row">
                    {reservas.map((reserva) => (
                        <ReservaContainer key={reserva.id} id={reserva.id} hotel={reserva.hotel} habitacion={reserva.habitacion}
                            fechaLlegada={reserva.fechaLlegada} fechaSalida={reserva.fechaSalida} personas={reserva.personas} precioEstancia={reserva.precioEstancia} />
                    ))}
                </div>
            )}
        </div>
    </>)
}