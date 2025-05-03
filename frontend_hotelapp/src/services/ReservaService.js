import axios from "axios"
import Swal from "sweetalert2";


export const reservarHabitacionReg = async ({ hotel, habitacion, usuario, fechaLlegada, fechaSalida, personas, precioEstancia }) => {
    try {
        const response = await axios.post('http://localhost:8080/reservas',
            { hotel, habitacion, usuario, fechaLlegada, fechaSalida, personas, precioEstancia }
        );
        console.log("Guardamos reserva y sumamos puntos");
        Swal.fire("Tu reserva se ha completado", "", "success");
        return response.data; // Retorna la respuesta del backend
    } catch (error) {
        console.error('Error al reservar la habitación:', error);
        return undefined;
    }
};

export const reservarHabitacionNoReg = async ({ hotel, habitacion, fechaLlegada, fechaSalida, personas, email_no_reg,
    nombre_no_reg, apellidos_no_reg, dni_no_reg, telefono_no_reg, precioEstancia }) => {
    try {
        const response = await axios.post('http://localhost:8080/reservas', {
            hotel, habitacion, fechaLlegada, fechaSalida, personas, email_no_reg,
            nombre_no_reg, apellidos_no_reg, dni_no_reg, telefono_no_reg, precioEstancia
        });
        Swal.fire("Tu reserva se ha completado", "", "success");
        return response.data; // Retorna la respuesta del backend
    } catch (error) {
        console.error('Error al reservar la habitación:', error);
        return undefined;
    }
};

export const obtenerReservasPorUsuarioEmail = async (email) => {
    try {
        const response = await axios.get(`http://localhost:8080/reservas?email=${email}`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
    return []
}


export const eliminarReserva = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/reservas/${id}`)
    } catch (error) {
        console.error(error);
    }
}
