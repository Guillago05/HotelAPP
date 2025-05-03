package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.List;
import java.util.Optional;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Reserva;

public interface ReservaService {

    Optional<Reserva> obtenerReservaPorId(Long id);

    Reserva reservarHabitacion(Reserva reserva);

    List<Reserva> reservasPorEmailUsuario(String email);

    void eliminarReserva(Long id);
}
