package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Habitacion;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.HabitacionRepository;

@Service
public class HabitacionServiceImpl implements HabitacionService {

    @Autowired
    private HabitacionRepository repository;

    @Override
    public List<Habitacion> findHabitaciones(String nombreHotel, Date fecha_llegada, Date fecha_salida,
            int personas) {
        List<Habitacion> habitaciones = repository.findHabitacionesDisponiblesHotel(nombreHotel, fecha_llegada,
                fecha_salida, personas);
        for (Habitacion habitacion : habitaciones) {
            habitacion.setHotel(null);
            habitacion.setReservas(null);
        }
        return habitaciones;
    }
}
