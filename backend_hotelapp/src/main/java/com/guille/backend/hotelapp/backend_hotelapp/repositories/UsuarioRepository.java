package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);
}
