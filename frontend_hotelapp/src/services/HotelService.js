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

