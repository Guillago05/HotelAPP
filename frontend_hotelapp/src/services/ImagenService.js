import axios from "axios";


export const getImagen = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/imagenes?id=${id}`);
        const imagenes = await response.data;
        if (imagenes.length === 0) return "";

        // Extraer ruta relativa a partir de 'public'
        const imagen = imagenes[0].ruta;
        return `${imagen}`;
    } catch (error) {
        console.error(error);
    }
    return "";
};

// export const getImagenes = async (){

// }