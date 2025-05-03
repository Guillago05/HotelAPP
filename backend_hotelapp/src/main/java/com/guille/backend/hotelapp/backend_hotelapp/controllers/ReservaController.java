package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Reserva;
import com.guille.backend.hotelapp.backend_hotelapp.services.ReservaService;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/reservas")
public class ReservaController {
    @Autowired
    private ReservaService service;

    @PostMapping()
    public ResponseEntity<?> reservarHabitacion(@RequestBody Reserva reserva) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.reservarHabitacion(reserva));
    }

    @GetMapping()
    public List<Reserva> reservasPorEmailUsuario(@RequestParam String email) {
        return service.reservasPorEmailUsuario(email);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarReserva(@PathVariable Long id) {
        Optional<Reserva> o = service.obtenerReservaPorId(id);
        if (o.isPresent()) {
            service.eliminarReserva(id);
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.notFound().build();
    }
}
