import { useLocation } from "react-router-dom";
import { NavBar } from "../components/layout/NavBar"


export const HotelPage = () => {
    const location = useLocation();
    const hotel = location.state?.hotel;
    const fecha_llegada = location.state?.fecha_llegada;
    const fecha_salida = location.state?.fecha_salida;
    const personas = location.state?.personas;
    return (
        <>
            <NavBar />

        </>
    )
}