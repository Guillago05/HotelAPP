package com.guille.backend.hotelapp.backend_hotelapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Reserva;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.ReservaRepository;

@Service
public class ReservaServiceImpl implements ReservaService {

    @Autowired
    private ReservaRepository repository;

    @Override
    @Transactional
    public Reserva reservarHabitacion(Reserva reserva) {
        repository.save(reserva);
        return reserva;
    }

}
