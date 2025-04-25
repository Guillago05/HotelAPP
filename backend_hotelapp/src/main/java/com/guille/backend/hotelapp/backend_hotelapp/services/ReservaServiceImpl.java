package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.sql.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Habitacion;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Reserva;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.HabitacionRepository;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.ReservaRepository;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.UsuarioRepository;

@Service
public class ReservaServiceImpl implements ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private HabitacionRepository habitacionRepository;

    @Override
    @Transactional
    public Reserva reservarHabitacion(Reserva reserva) {
        Optional<Usuario> o = usuarioRepository.findById(reserva.getUsuario().getId());
        if (o.isPresent()) {
            Usuario u = o.orElseThrow();
            Optional<Habitacion> oh = habitacionRepository.findById(reserva.getHabitacion().getId());
            int precio_noche_reserva = oh.orElseThrow().getPrecio_noche();
            Date fechaLlegada = reserva.getFechaLlegada();
            Date fechaSalida = reserva.getFechaSalida();
            long difEnMS = fechaSalida.getTime() - fechaLlegada.getTime();
            int duracion_estancia = (int) (difEnMS / (1000 * 3600 * 24));
            System.out.println();
            System.out.println();
            System.out.println(duracion_estancia);
            double precio_total = duracion_estancia * precio_noche_reserva;
            System.out.println();
            System.out.println();
            System.out.println(precio_total);
            int puntos = (int) Math.ceil(precio_total / 10) + u.getPuntos();

            usuarioRepository.modificarPuntosUsuario(puntos, u.getId());

        }
        reservaRepository.save(reserva);
        return reserva;
    }

}
