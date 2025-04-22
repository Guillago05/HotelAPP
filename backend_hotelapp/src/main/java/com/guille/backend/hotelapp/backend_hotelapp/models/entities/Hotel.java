
package com.guille.backend.hotelapp.backend_hotelapp.models.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "hoteles")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Hotel extends Login {

    private String nombre;
    @Lob
    private String descripcion;
    private String ciudad;
    private String direccion;
    private int total_habitaciones;

    @OneToMany(mappedBy = "hotel")
    private List<Reserva> reservas;
    @OneToMany(mappedBy = "hotel")
    private List<Habitacion> habitaciones;
    @OneToMany(mappedBy = "hotel")
    private List<Imagen> imagenes;

    public Hotel() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getTotal_habitaciones() {
        return total_habitaciones;
    }

    public void setTotal_habitaciones(int total_habitaciones) {
        this.total_habitaciones = total_habitaciones;
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }

    public List<Habitacion> getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(List<Habitacion> habitaciones) {
        this.habitaciones = habitaciones;
    }

    public List<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

}
