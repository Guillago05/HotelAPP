import { useNavigate } from "react-router-dom";

export const HotelContainer = ({ hotel }) => {
    const navigate = useNavigate();

    const handleReservar = () => {
        navigate(`/hotel/${hotel.id}`);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h5 className="card-title">{hotel.nombre}</h5>
                    <p className="card-text">
                        <strong>Ciudad:</strong> {hotel.ciudad} <br />
                        <strong>Dirección:</strong> {hotel.direccion} <br />
                        <strong>Descripcion:</strong> {hotel.descripcion}
                    </p>
                    <p className="card-text">{hotel.descripcion}</p>
                    <button className="btn btn-primary" onClick={handleReservar}>Reservar</button>
                </div>
            </div>
        </div>
    );
};
