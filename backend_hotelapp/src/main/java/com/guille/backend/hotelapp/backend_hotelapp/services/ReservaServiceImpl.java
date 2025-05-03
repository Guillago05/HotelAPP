package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Habitacion;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Hotel;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Reserva;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.ReservaRepository;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.UsuarioRepository;

@Service
public class ReservaServiceImpl implements ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Optional<Reserva> obtenerReservaPorId(Long id) {
        return reservaRepository.obtenerReservaPorID(id);
    }

    @Override
    public Reserva reservarHabitacion(Reserva reserva) {
        Optional<Usuario> o = usuarioRepository.findById(reserva.getUsuario().getId());
        if (o.isPresent()) {
            Usuario u = o.orElseThrow();
            double precio_total = reserva.getPrecioEstancia();
            int puntos = (int) Math.ceil(precio_total / 10) + u.getPuntos();
            u.setPuntos(puntos);
            usuarioRepository.save(u);
        }
        reservaRepository.save(reserva);
        return reserva;
    }

    @Override
    public List<Reserva> reservasPorEmailUsuario(String email) {
        List<Reserva> reservas = reservaRepository.findReservasByUsuarioEmail(email);
        for (Reserva r : reservas) {
            Hotel hotel = r.getHotel();
            hotel.setHabitaciones(null);
            hotel.setReservas(null);
            hotel.setImagenes(null);
            hotel.setRol(null);
            r.setHotel(hotel);
            Habitacion habitacion = r.getHabitacion();
            habitacion.setHotel(null);
            habitacion.setReservas(null);
            r.setHabitacion(habitacion);
            r.setUsuario(null);
        }
        return reservas;
    }

    @Override
    public void eliminarReserva(Long id) {
        reservaRepository.deleteById(id);
    }

}
