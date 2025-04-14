package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.sql.Date;
import java.util.List;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Hotel;

public interface HotelService {

    List<Hotel> findHotelsFilter(String ciudad, Date fecha_llegada,
            Date fecha_salida, int personas);
}
