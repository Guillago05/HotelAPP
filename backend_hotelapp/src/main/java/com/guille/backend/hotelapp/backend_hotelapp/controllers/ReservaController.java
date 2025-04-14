package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Reserva;
import com.guille.backend.hotelapp.backend_hotelapp.services.ReservaService;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/reservas")
public class ReservaController {
    @Autowired
    private ReservaService service;

    @PostMapping()
    public ResponseEntity<?> reservarHabitacion(@RequestBody Reserva reserva) {
        System.out.println(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(service.reservarHabitacion(reserva));
    }
}
