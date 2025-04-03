
package com.guille.backend.hotelapp.backend_hotelapp.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

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
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario; // Para usuarios que esten registrados, sera null si la reserva es de alguien
                             // que no esta registrado
    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;
    @ManyToOne
    @JoinColumn(name = "habitacion_id")
    private Habitacion habitacion;
    @Temporal(TemporalType.DATE)
    private Date fechaLlegada;
    @Temporal(TemporalType.DATE)
    private Date fechaSalida;
    private int personas;
    // Atributos para usuarios no registrados
    private String email_no_reg;
    private String nombre_no_reg;
    private String apellidos_no_reg;
    private String dni_no_reg;
    private String telefono_no_reg;

    public Reserva() {
    }

    public Reserva(Long id, Usuario usuario, String email_no_reg, Hotel hotel, Habitacion habitacion, Date fechaLlegada,
            Date fechaSalida, int personas, String nombre_no_reg, String apellidos_no_reg, String dni_no_reg,
            String telefono_no_reg) {
        this.id = id;
        this.usuario = usuario;
        this.email_no_reg = email_no_reg;
        this.hotel = hotel;
        this.habitacion = habitacion;
        this.fechaLlegada = fechaLlegada;
        this.fechaSalida = fechaSalida;
        this.personas = personas;
        this.nombre_no_reg = nombre_no_reg;
        this.apellidos_no_reg = apellidos_no_reg;
        this.dni_no_reg = dni_no_reg;
        this.telefono_no_reg = telefono_no_reg;
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

    public int getPersonas() {
        return personas;
    }

    public void setPersonas(int personas) {
        this.personas = personas;
    }

    public Habitacion getHabitacion() {
        return habitacion;
    }

    public void setHabitacion(Habitacion habitacion) {
        this.habitacion = habitacion;
    }

    public String getEmail_no_reg() {
        return email_no_reg;
    }

    public void setEmail_no_reg(String email_no_reg) {
        this.email_no_reg = email_no_reg;
    }

    public String getNombre_no_reg() {
        return nombre_no_reg;
    }

    public void setNombre_no_reg(String nombre_no_reg) {
        this.nombre_no_reg = nombre_no_reg;
    }

    public String getApellidos_no_reg() {
        return apellidos_no_reg;
    }

    public void setApellidos_no_reg(String apellidos_no_reg) {
        this.apellidos_no_reg = apellidos_no_reg;
    }

    public String getDni_no_reg() {
        return dni_no_reg;
    }

    public void setDni_no_reg(String dni_no_reg) {
        this.dni_no_reg = dni_no_reg;
    }

    public String getTelefono_no_reg() {
        return telefono_no_reg;
    }

    public void setTelefono_no_reg(String telefono_no_reg) {
        this.telefono_no_reg = telefono_no_reg;
    }

}
