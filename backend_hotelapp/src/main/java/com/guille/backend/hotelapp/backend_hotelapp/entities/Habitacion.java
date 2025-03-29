package com.guille.backend.hotelapp.backend_hotelapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "habitaciones")
public class Habitacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int numero;
    private int precio_noche;
    private boolean ocupado; // True para ocupado, false para libre
    private int personas;
    @ManyToOne()
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    public Habitacion(Long id, int numero, int precio_noche, boolean ocupado, int personas, Hotel hotel) {
        this.id = id;
        this.numero = numero;
        this.precio_noche = precio_noche;
        this.ocupado = ocupado;
        this.personas = personas;
        this.hotel = hotel;
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

    public boolean isOcupado() {
        return ocupado;
    }

    public void setOcupado(boolean ocupado) {
        this.ocupado = ocupado;
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

}
