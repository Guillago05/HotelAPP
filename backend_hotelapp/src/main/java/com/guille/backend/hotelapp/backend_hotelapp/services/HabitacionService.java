package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.sql.Date;
import java.util.List;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Habitacion;

public interface HabitacionService {

    List<Habitacion> findHabitaciones(String nombreHotel, Date fecha_llegada, Date fecha_salida,
            int personas);
}
