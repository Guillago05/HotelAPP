// components/ReservaContainer.jsx
import { useEffect, useState } from "react";
import { getImagen } from "../services/ImagenService";
import Swal from "sweetalert2";
import { eliminarReserva } from "../services/ReservaService";

export const ReservaContainer = ({ id, hotel, habitacion, fechaLlegada, fechaSalida, personas, precioEstancia }) => {
    const [rutaImagen, setRutaImagen] = useState("");

    useEffect(() => {
        const fetchImagen = async () => {
            const imagen = await getImagen(hotel.id);
            setRutaImagen(imagen);
        };
        fetchImagen();
    }, [hotel.id]);

    const handleDelete = () => {
        Swal.fire({
            title: "¿Estás seguro de eliminar la reserva?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Seguro",
            denyButtonText: `Mejor no`,
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarReserva(id);
                Swal.fire("Se eliminó la reserva", "", "success").then(() => {
                    window.location.reload();
                });
            }
        });
    }

    return (
        <div className="col-12 mb-4">
            <div className="card shadow bg-dark text-white">
                <div className="row g-0 align-items-center">
                    {/* Imagen del hotel */}
                    <div className="col-md-4">
                        <img
                            src={rutaImagen}
                            alt={hotel.nombre}
                            className="img-fluid rounded-start"
                            style={{ height: "100%", objectFit: "cover" }}
                        />
                    </div>

                    {/* Detalles de la reserva */}
                    <div className="col-md-8 d-flex flex-column justify-content-between p-3">
                        <div>
                            <h5 className="card-title">{hotel.nombre}</h5>
                            <p className="card-text">
                                <strong>Ciudad:</strong> {hotel.ciudad}<br />
                                <strong>Dirección:</strong> {hotel.direccion}<br />
                                <strong>Habitación:</strong> #{habitacion.numero} ({habitacion.personas} persona{habitacion.personas > 1 ? 's' : ''})<br />
                                <strong>Fechas:</strong> {fechaLlegada} &rarr; {fechaSalida}<br />
                                <strong>Total:</strong> {precioEstancia} €
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <button className="btn btn-danger" onClick={handleDelete}>
                                Cancelar Reserva
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
