package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Habitacion;
import com.guille.backend.hotelapp.backend_hotelapp.services.HabitacionService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/habitaciones")
public class HabitacionController {

    @Autowired
    private HabitacionService service;

    @GetMapping("/disponibles")
    public List<Habitacion> habitacionesDisponiblesPrecio(@RequestParam String nombreHotel,
            @RequestParam String fecha_llegada,
            @RequestParam String fecha_salida, @RequestParam int personas) {

        // Convertir las fechas de String a LocalDate
        Date llegada = Date.valueOf(fecha_llegada);
        Date salida = Date.valueOf(fecha_salida);
        List<Habitacion> habitaciones = service.findHabitaciones(nombreHotel, llegada, salida, personas);

        return habitaciones;
    }

}
