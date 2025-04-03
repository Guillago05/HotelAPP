package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Reserva;
import com.guille.backend.hotelapp.backend_hotelapp.services.ReservaService;

@RestController
@CrossOrigin(originPatterns = "*")
public class ReservaController {
    @Autowired
    private ReservaService service;

    @PostMapping("reserva")
    public ResponseEntity<?> reservarHabitacion(@RequestBody Reserva reserva) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.reservarHabitacion(reserva));
    }
}
