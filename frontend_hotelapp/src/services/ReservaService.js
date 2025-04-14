import axios from "axios"


export const reservarHabitacionReg = async ({ hotel, habitacion, usuario, fechaLlegada, fechaSalida, personas }) => {
    try {
        const response = await axios.post('http://localhost:8080/reservas',
            { hotel, habitacion, usuario, fechaLlegada, fechaSalida, personas }
        );
        return response.data; // Retorna la respuesta del backend
    } catch (error) {
        console.error('Error al reservar la habitación:', error);
        return undefined;
    }
};

export const reservarHabitacionNoReg = async ({ hotel, habitacion, fechaLlegada, fechaSalida, personas, email_no_reg,
    nombre_no_reg, apellidos_no_reg, dni_no_reg, telefono_no_reg }) => {
    try {
        const response = await axios.post('http://localhost:8080/reservas', {
            hotel, habitacion, fechaLlegada, fechaSalida, personas, email_no_reg,
            nombre_no_reg, apellidos_no_reg, dni_no_reg, telefono_no_reg
        });
        return response.data; // Retorna la respuesta del backend
    } catch (error) {
        console.error('Error al reservar la habitación:', error);
        return undefined;
    }
};
