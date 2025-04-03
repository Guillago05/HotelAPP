import axios from "axios"


export const reservarHabitacion = async ({ nombre_no_reg, apellidos_no_reg, email_no_reg,
    dni_no_reg, telefono_no_reg, hotel, habitacion,
    fecha_llegada, fecha_salida, personas
}) => {
    try {
        const response = await axios.post('http://localhost:8080/reserva', {
            nombre_no_reg,
            apellidos_no_reg,
            email_no_reg,
            dni_no_reg,
            telefono_no_reg,
            hotel,
            habitacion,
            fecha_llegada,
            fecha_salida,
            personas
        });
        return response.data; // Retorna la respuesta del backend
    } catch (error) {
        console.error('Error al reservar la habitación:', error);
        return undefined;
    }
};
