package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.sql.Date;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Habitacion;

public interface HabitacionService {

    Habitacion findHabitacionMasBarata(String nombreHotel, Date fecha_llegada, Date fecha_salida,
            int personas);
}
