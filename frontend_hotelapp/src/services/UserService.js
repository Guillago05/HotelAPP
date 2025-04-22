import axios from "axios"

export const getUsuarioPorCorreo = async (correo) => {
    try {
        const response = await axios.get(`http://localhost:8080/usuarios?email=${correo}`);
        const usuario = response.data;
        return usuario;
    } catch (error) {
        console.log(error);
    }
}