import { useNavigate } from "react-router-dom";
import { getPrecioMasBarato } from "../services/HotelService";
import { useEffect, useState } from "react";

export const HotelContainer = ({ hotel, fecha_llegada, fecha_salida, personas }) => {

    const [precio, setPrecio] = useState(0);

    const navigate = useNavigate();

    const verDisponibilidad = () => {
        navigate(`/hotel/${hotel.nombre}`, { state: { hotel, fecha_llegada, fecha_salida, personas } });
    };

    const precio_total = async () => {
        const precioTotal = await getPrecioMasBarato(hotel.nombre, fecha_llegada, fecha_salida, personas);
        setPrecio(precioTotal);
    };

    useEffect(
        () => {
            precio_total();
        }, [hotel.ciudad, fecha_llegada, fecha_llegada, personas]
    );
    return (
        <div className="col-12 mb-4">
            <div className="card shadow-lg bg-dark text-white">
                <div className="row g-0 align-items-center">
                    {/* Imagen a la izquierda */}
                    <div className="col-md-4">
                        <img
                            src={""}
                            alt={hotel.nombre}
                            className="img-fluid rounded-start"
                            style={{ height: "100%", objectFit: "cover" }}
                        />
                    </div>

                    {/* Contenido del hotel alineado a la derecha */}
                    <div className="col-md-8 d-flex flex-column justify-content-between p-3">
                        <div>
                            <h5 className="card-title">{hotel.nombre}</h5>
                            <p className="card-text">
                                <strong>Ciudad:</strong> {hotel.ciudad} <br />
                                <strong>Dirección:</strong> {hotel.direccion} <br />
                                <strong>Descripción:</strong> {hotel.descripcion}
                            </p>
                        </div>

                        <div className="d-flex flex-column align-items-end">
                            <span className="text-warning fs-4 mb-2">Habitaciones desde {precio}€</span>
                            <button className="btn btn-primary" onClick={verDisponibilidad}>
                                Ver Disponibilidad
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
