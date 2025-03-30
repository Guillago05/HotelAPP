import { useSearchParams } from "react-router-dom"
import { NavBar } from "../components/layout/NavBar"
import { HotelContainer } from "../components/HotelContainer";
import { getHotelesDisponibles } from "../services/HotelService";
import { useEffect, useState } from "react";

export const ListHotelsPage = () => {

    const [hotelesFiltrados, setHotelesFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    // Obtener todos los parámetros
    const ciudad = searchParams.get("ciudad") || "";
    const fechaLlegada = searchParams.get("fecha_llegada") || "";
    const fechaSalida = searchParams.get("fecha_salida") || "";
    const personas = searchParams.get("personas") || "";

    const findHotel = async () => {
        const hoteles = await getHotelesDisponibles(ciudad, fechaLlegada, fechaSalida, personas);
        setHotelesFiltrados(hoteles);
        setLoading(false);
    }

    useEffect(
        () => {
            findHotel();
        }, []
    );
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Hoteles disponibles en {ciudad}</h1>

                {hotelesFiltrados.length === 0 ? (
                    <p className="text-center">No se encontraron hoteles en esta ciudad.</p>
                ) : (
                    <div className="row">
                        {hotelesFiltrados.map((hotel) => (
                            <HotelContainer key={hotel.id} hotel={hotel} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}