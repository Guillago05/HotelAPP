import axios from "axios";

export const loginUser = async ({ email, contrasenia }) => {
    try {
        return await axios.post('http://localhost:8080/login', {
            email,
            contrasenia
        });
    } catch (error) {
        throw error;
    }
}