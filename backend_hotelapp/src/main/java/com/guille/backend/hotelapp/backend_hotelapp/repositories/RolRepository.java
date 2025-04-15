package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Rol;

public interface RolRepository extends CrudRepository<Rol, Long> {
    Optional<Rol> findByName(String role);
}
