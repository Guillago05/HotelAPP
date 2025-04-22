package com.guille.backend.hotelapp.backend_hotelapp.models.dto;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Rol;

public class UsuarioDto {

    private Long id;
    private String email;
    private String nombre;
    private String apellidos;
    private String telefono;
    private String dni;
    private Long puntos;
    private Rol rol;

    public UsuarioDto() {
    }

    public UsuarioDto(Long id, String email, String nombre, String apellidos, String telefono, String dni, Long puntos,
            Rol rol) {
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.dni = dni;
        this.puntos = puntos;
        this.rol = rol;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Long getPuntos() {
        return puntos;
    }

    public void setPuntos(Long puntos) {
        this.puntos = puntos;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

}
