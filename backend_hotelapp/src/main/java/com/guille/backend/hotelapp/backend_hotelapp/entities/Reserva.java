package com.guille.backend.hotelapp.backend_hotelapp.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario; // Para usuarios que esten registrados, sera null si la reserva es de alguien
                             // que no esta registrado
    private String email_no_reg;// Para usuarios que no esten registrados, sera null si la reserva es de alguien
                                // que esta registrado
    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;
    @Temporal(TemporalType.DATE)
    private Date fechaLlegada;
    @Temporal(TemporalType.DATE)
    private Date fechaSalida;
    private int personas;

    public Reserva(Long id, Usuario usuario, String email_no_reg, Hotel hotel, Date fechaLlegada, Date fechaSalida,
            int personas) {
        this.id = id;
        this.usuario = usuario;
        this.email_no_reg = email_no_reg;
        this.hotel = hotel;
        this.fechaLlegada = fechaLlegada;
        this.fechaSalida = fechaSalida;
        this.personas = personas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public Date getFechaLlegada() {
        return fechaLlegada;
    }

    public void setFechaLlegada(Date fechaLlegada) {
        this.fechaLlegada = fechaLlegada;
    }

    public Date getFechaSalida() {
        return fechaSalida;
    }

    public void setFechaSalida(Date fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public String getEmail_no_reg() {
        return email_no_reg;
    }

    public void setEmail_no_reg(String email_no_reg) {
        this.email_no_reg = email_no_reg;
    }

    public int getPersonas() {
        return personas;
    }

    public void setPersonas(int personas) {
        this.personas = personas;
    }

}
