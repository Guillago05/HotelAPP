package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
