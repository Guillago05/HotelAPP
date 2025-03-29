import { useState } from "react";
import { NavBar } from "../components/layout/NavBar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const HomePage = () => {

    const [ciudad, setCiudad] = useState('');
    const [personas, setPersonas] = useState(1);
    const [habitaciones, setHabitaciones] = useState(1);
    const [fechaLlegada, setFechaLlegada] = useState(new Date().toISOString().split('T')[0]);
    const [fechaSalida, setFechaSalida] = useState(new Date().toISOString().split('T')[0]);

    const navigate = useNavigate();

    const onCiudadChange = ({ target }) => {
        const { value } = target;
        setCiudad(value);
    }

    const onFechaLlegadaChange = ({ target }) => {
        setFechaLlegada(target.value);
    };

    const onFechaSalidaChange = ({ target }) => {
        setFechaSalida(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/searchresults?ciudad=${ciudad}`)
    }

    const counterIncrementP = (event) => {
        event.preventDefault();
        setPersonas(personas + 1);
    };

    const counterDecrementP = (event) => {
        event.preventDefault();
        setPersonas(personas > 1 ? personas - 1 : 1);
    };

    const counterIncrementH = (event) => {
        event.preventDefault();
        if (habitaciones >= personas) {
            Swal.fire({
                icon: "warning",
                title: "¡Atención!",
                text: "No puedes tener más habitaciones que personas.",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Entendido",
            });
        } else {
            setHabitaciones(habitaciones + 1);
        }
    };

    const counterDecrementH = (event) => {
        event.preventDefault();
        setHabitaciones(habitaciones > 1 ? habitaciones - 1 : 1);
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                {/* Título */}
                <h1 className="text-center mb-4">Encuentra tu hotel ideal</h1>

                {/* Buscador */}
                <div className="card p-4 shadow-lg">
                    <form onSubmit={onSubmit}>
                        <div className="d-flex flex-wrap align-items-end gap-3">
                            {/* Ciudad de destino */}
                            <div className="flex-grow-1">
                                <label className="form-label">Ciudad de destino</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ej. Madrid"
                                    value={ciudad}
                                    onChange={onCiudadChange}
                                />
                            </div>

                            {/* Fecha de llegada */}
                            <div>
                                <label className="form-label">Fecha de llegada</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fechaLlegada}
                                    onChange={onFechaLlegadaChange}
                                />
                            </div>

                            {/* Fecha de salida */}
                            <div>
                                <label className="form-label">Fecha de salida</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fechaSalida}
                                    onChange={onFechaSalidaChange}
                                />
                            </div>

                            {/* Número de personas */}
                            <div>
                                <label className="form-label">Nº de personas</label>
                                <div className="d-flex align-items-center gap-2">
                                    <button className="btn btn-secondary" onClick={counterDecrementP}>-</button>
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        value={personas}
                                        readOnly
                                        style={{ width: "50px" }}
                                    />
                                    <button className="btn btn-secondary" onClick={counterIncrementP}>+</button>
                                </div>
                            </div>

                            {/* Número de habitaciones */}
                            <div>
                                <label className="form-label">Nº de habitaciones</label>
                                <div className="d-flex align-items-center gap-2">
                                    <button className="btn btn-secondary" onClick={counterDecrementH}>-</button>
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        value={habitaciones}
                                        readOnly
                                        style={{ width: "50px" }}
                                    />
                                    <button className="btn btn-secondary" onClick={counterIncrementH}>+</button>
                                </div>
                            </div>

                            {/* Botón de búsqueda */}
                            <div>
                                <button className="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};
