import axios from "axios";

export const getHotelesDisponibles = async (ciudad, fecha_llegada, fecha_salida, personas) => {
    // const response = await fetch(`http://localhost:8080/searchresults?ciudad=${ciudad}&fecha_llegada=${fecha_llegada}&fecha_salida=${fecha_salida}&personas=${personas}`);
    // const hoteles = await response.json();
    // return hoteles;

    try {
        const response = await axios.get(`http://localhost:8080/hoteles/disponibles?ciudad=${ciudad}&fecha_llegada=${fecha_llegada}&fecha_salida=${fecha_salida}&personas=${personas}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
    return [];
}

export const getPrecioMasBarato = async (nombreHotel, fecha_llegada, fecha_salida, personas) => {

    try {
        const nombreHotelEncoded = encodeURIComponent(nombreHotel);
        const response = await axios.get(`http://localhost:8080/habitaciones/disponibles?nombreHotel=${nombreHotelEncoded}&fecha_llegada=${fecha_llegada}&fecha_salida=${fecha_salida}&personas=${personas}`);
        const habitaciones = await response.data;
        if (habitaciones.length == 0) return null;//No hay habitaciones disponibles
        const llegada = new Date(fecha_llegada);
        const salida = new Date(fecha_salida);
        const duracionEstancia = Math.ceil((salida - llegada) / (1000 * 3600 * 24));
        const precio = habitaciones[0].precio_noche * duracionEstancia;
        return precio;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const getHabitaciones = async (nombreHotel, fecha_llegada, fecha_salida, personas) => {
    try {
        const nombreHotelEncoded = encodeURIComponent(nombreHotel);
        const response = await axios.get(`http://localhost:8080/habitaciones/disponibles?nombreHotel=${nombreHotelEncoded}&fecha_llegada=${fecha_llegada}&fecha_salida=${fecha_salida}&personas=${personas}`);
        const habitaciones = await response.data;
        if (!habitaciones.length) return [];
        return habitaciones;
    } catch (error) {
        console.log(error)
    }
    return null;
}