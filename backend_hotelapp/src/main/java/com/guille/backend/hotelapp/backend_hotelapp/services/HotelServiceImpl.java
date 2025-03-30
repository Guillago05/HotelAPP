package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Hotel;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.HotelRepository;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    HotelRepository repository;

    @Override
    public List<Hotel> findHotelsFilter(String ciudad, Date fecha_llegada, Date fecha_salida, int personas) {
        List<Hotel> hoteles = repository.findHotelesDisponibles(ciudad, fecha_llegada, fecha_salida, personas);
        for (Hotel hotel : hoteles) {
            hotel.setHabitaciones(null);
            hotel.setReservas(null);
            hotel.setImagenes(null);
        }
        return hoteles;
    }

}
