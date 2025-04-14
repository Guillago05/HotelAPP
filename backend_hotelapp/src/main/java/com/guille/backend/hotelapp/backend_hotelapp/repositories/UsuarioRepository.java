package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

}
