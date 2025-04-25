package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.models.dto.UsuarioDto;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;
import com.guille.backend.hotelapp.backend_hotelapp.models.requests.UsuarioRequest;
import com.guille.backend.hotelapp.backend_hotelapp.services.UsuarioService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @PostMapping()
    public ResponseEntity<?> registroUsuario(@RequestBody UsuarioRequest usuarioRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.registroUsuario(usuarioRequest));
    }

    @GetMapping()
    public ResponseEntity<?> obtenerUsuarioPorEmail(@RequestParam String email) {
        Optional<UsuarioDto> o = service.obtenerUsuarioPorCorreo(email);
        if (o.isPresent()) {
            return ResponseEntity.ok(o.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{email}")
    public ResponseEntity<?> modificarDatosPorEmail(@RequestBody Usuario usuario, @PathVariable String email) {
        Optional<UsuarioDto> o = service.modificarDatosPorCorreo(usuario, email);
        if (o.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(o.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<?> deleteByEmail(@PathVariable String email) {
        Optional<UsuarioDto> o = service.obtenerUsuarioPorCorreo(email);
        if (o.isPresent()) {
            service.eliminarCuentaUsuario(email);
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.notFound().build();
    }

}
