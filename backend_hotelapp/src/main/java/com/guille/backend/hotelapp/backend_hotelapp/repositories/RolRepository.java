package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Rol;

public interface RolRepository extends CrudRepository<Rol, Long> {
    Optional<Rol> findByName(String role);
}
