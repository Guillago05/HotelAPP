package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Hotel;
import com.guille.backend.hotelapp.backend_hotelapp.services.HotelService;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class HotelController {

    @Autowired
    private HotelService service;

    @GetMapping("/filter")
    public List<Hotel> hotelesDisponibles(@RequestParam String ciudad, @RequestParam Date fecha_llegada,
            @RequestParam Date fecha_salida, @RequestParam int personas) {
        return service.findHotelsFilter(ciudad, fecha_llegada, fecha_salida, personas);
    }
}
