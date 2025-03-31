import { NavBar } from "../components/layout/NavBar";
import { BarraBusqueda } from "../components/BarraBusqueda";


export const HomePage = () => {
    return (
        <>
            <NavBar />
            <BarraBusqueda home={true} />
        </>
    );
};
