package com.guille.backend.hotelapp.backend_hotelapp.models.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class UsuarioRequest {

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    private String contrasenia;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

}
