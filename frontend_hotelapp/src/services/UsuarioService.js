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

export const eliminarCuentaUsuario = async (correo) => {
    try {
        await axios.delete(`http://localhost:8080/usuarios/${correo}`);
    } catch (error) {
        console.error(error);
    }
}

export const modificarDatosUsuario = async ({ email, nombre, apellidos, contrasenia, telefono, DNI }) => {
    try {
        return await axios.put(`http://localhost:8080/usuarios/${email}`,
            { nombre, apellidos, contrasenia, telefono, DNI }
        );
    } catch (error) {
        console.error(error);
    }
    return undefined;
}