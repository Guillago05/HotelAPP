import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BarraBusqueda = ({ home }) => {
    const [ciudad, setCiudad] = useState('');
    const [personas, setPersonas] = useState(1);
    const [fechaLlegada, setFechaLlegada] = useState(new Date().toISOString().split('T')[0]);
    const [fechaSalida, setFechaSalida] = useState(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    });

    const navigate = useNavigate();

    const onCiudadChange = ({ target }) => {
        const { value } = target;
        setCiudad(value);
    }

    const onFechaLlegadaChange = ({ target }) => {
        const llegada = new Date(target.value);
        const salida = new Date(llegada);
        salida.setDate(llegada.getDate() + 1);

        setFechaLlegada(target.value);
        setFechaSalida(salida.toISOString().split('T')[0]);
    };

    const onFechaSalidaChange = ({ target }) => {
        setFechaSalida(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setCiudad('');
        setFechaLlegada(new Date().toISOString().split('T')[0]);
        setFechaSalida(new Date().toISOString().split('T')[0]);
        setPersonas(1);
        navigate(`/searchresults?ciudad=${ciudad}&fecha_llegada=${fechaLlegada}&fecha_salida=${fechaSalida}&personas=${personas}`)
    }

    const counterIncrementP = (event) => {
        event.preventDefault();
        setPersonas(personas + 1);
    };

    const counterDecrementP = (event) => {
        event.preventDefault();
        setPersonas(personas > 1 ? personas - 1 : 1);
    };

    const getMinDate = () => {
        return new Date().toISOString().split('T')[0];
    }

    return (
        <>
            <div className="container mt-5">
                {/* Título */}
                {home ? <h1 className="text-center mb-4">Encuentra tu hotel ideal</h1> : ''}

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
                                    min={getMinDate()}
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
                                    min={fechaLlegada}
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
                            {/* Botón de búsqueda */}
                            <div>
                                <button className="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}