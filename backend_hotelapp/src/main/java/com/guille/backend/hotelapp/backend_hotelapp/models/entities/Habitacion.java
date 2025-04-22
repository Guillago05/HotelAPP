package com.guille.backend.hotelapp.backend_hotelapp.models.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "habitaciones")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Habitacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int numero;
    private int precio_noche;
    private int personas;
    @ManyToOne()
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;
    @OneToMany(mappedBy = "habitacion")
    private List<Reserva> reservas;

    public Habitacion() {
    }

    public Habitacion(Long id, int numero, int precio_noche, int personas, Hotel hotel,
            List<Reserva> reservas) {
        this.id = id;
        this.numero = numero;
        this.precio_noche = precio_noche;
        this.personas = personas;
        this.hotel = hotel;
        this.reservas = reservas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getPrecio_noche() {
        return precio_noche;
    }

    public void setPrecio_noche(int precio_noche) {
        this.precio_noche = precio_noche;
    }

    public int getPersonas() {
        return personas;
    }

    public void setPersonas(int personas) {
        this.personas = personas;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }

}