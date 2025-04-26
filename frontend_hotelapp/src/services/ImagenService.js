import axios from "axios";


export const getImagen = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/imagenes?id=${id}`);
        const imagenes = await response.data;
        if (imagenes.length === 0) return "";

        // Extraer ruta relativa a partir de 'public'
        const pathParts = imagenes[0].ruta.split(/public[\\/]/);
        const relativePath = pathParts.length > 1 ? pathParts[1].replace(/\\/g, "/") : "";
        console.log(relativePath);
        // Retornar ruta accesible desde el navegador
        return `/${relativePath}`;
    } catch (error) {
        console.error(error);
    }
    return "";
};

// export const getImagenes = async (){

// }