package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.Optional;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Usuario;

public interface UsuarioService {

    Optional<Usuario> findById(Long id);

    Usuario registrar(Usuario Usuario);

    Optional<Usuario> modificarDatos(Usuario usuario, Long id);

    void eliminarUsuario(Long id);
}
