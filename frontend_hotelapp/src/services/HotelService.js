
export const getHotelesDisponibles = async (ciudad, fecha_llegada, fecha_salida, personas) => {
    const response = await fetch(`http://localhost:8080/searchresults?ciudad=${ciudad}&fecha_llegada=${fecha_llegada}&fecha_salida=${fecha_salida}&personas=${personas}`);
    const hoteles = await response.json();
    return hoteles;
}

export const getPrecioEstancia = async (nombreHotel, fecha_llegada, fecha_salida, personas) => {
    const nombreHotelEncoded = encodeURIComponent(nombreHotel);
    const response = await fetch(`http://localhost:8080/habitacionesDisponibles?nombreHotel=${nombreHotelEncoded}&fecha_llegada=${fecha_llegada}&fecha_salida=${fecha_salida}&personas=${personas}`)
    const habitacion = await response.json()
    // Calcular la duración de la estancia (en días)
    const llegada = new Date(fecha_llegada);
    const salida = new Date(fecha_salida);
    const duracionEstancia = Math.ceil((salida - llegada) / (1000 * 3600 * 24)); // Número de días entre las dos fechas
    const precio = habitacion.precio_noche * duracionEstancia; // Calcular el precio total por habitación
    return precio; // Devolver el array de precios
}