import { useSearchParams } from "react-router-dom"
import { NavBar } from "../components/layout/NavBar"
import { HotelContainer } from "../components/HotelContainer";
import { getHotelesDisponibles } from "../services/HotelService";
import { useEffect, useState } from "react";
import { BarraBusqueda } from "../components/BarraBusqueda";

export const ListHotelsPage = () => {

    const [hotelesFiltrados, setHotelesFiltrados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();
    // Obtener todos los parámetros
    const ciudad = searchParams.get("ciudad") || "";
    const fecha_llegada = searchParams.get("fecha_llegada") || "";
    const fecha_salida = searchParams.get("fecha_salida") || "";
    const personas = searchParams.get("personas") || "";

    const findHotel = async () => {
        const hoteles = await getHotelesDisponibles(ciudad, fecha_llegada, fecha_salida, personas);
        setHotelesFiltrados(hoteles);
        setIsLoading(false);
    }

    useEffect(() => {
        findHotel();
    }, [ciudad, fecha_llegada, fecha_salida, personas]);

    return (
        <>
            <NavBar />
            <BarraBusqueda home={false} />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Hoteles disponibles en {ciudad}</h1>

                {isLoading ? (
                    <p className="text-center">Cargando...</p>
                ) : (
                    <div className="row">
                        {hotelesFiltrados.map((hotel) => (
                            <HotelContainer key={hotel.id} hotel={hotel} fecha_llegada={fecha_llegada}
                                fecha_salida={fecha_salida} personas={personas} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}