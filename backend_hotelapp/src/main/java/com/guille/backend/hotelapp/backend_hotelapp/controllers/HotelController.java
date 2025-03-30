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

    @GetMapping("/searchresults")
    public List<Hotel> hotelesDisponibles(@RequestParam String ciudad, @RequestParam String fecha_llegada,
            @RequestParam String fecha_salida, @RequestParam int personas) {
        // Convertir las fechas de String a LocalDate
        Date llegada = Date.valueOf(fecha_llegada);
        Date salida = Date.valueOf(fecha_salida);
        return service.findHotelsFilter(ciudad, llegada, salida, personas);
    }

}
