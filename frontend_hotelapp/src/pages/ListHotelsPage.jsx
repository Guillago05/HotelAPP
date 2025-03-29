import { useSearchParams } from "react-router-dom"
import { NavBar } from "../components/layout/NavBar"
import { hoteles } from "../hoteles";
import { HotelContainer } from "../components/HotelContainer";

export const ListHotelsPage = () => {

    const [searchParams] = useSearchParams();
    const ciudadFiltro = searchParams.get("ciudad") || "";

    const hotelesFiltrados = ciudadFiltro
        ? hoteles.filter((hotel) => hotel.ciudad.toLowerCase() === ciudadFiltro.toLowerCase())
        : hoteles;

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Hoteles disponibles en {ciudadFiltro || "todas las ciudades"}</h1>

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