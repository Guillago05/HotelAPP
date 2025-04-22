package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Login;

public interface LoginRepository extends CrudRepository<Login, Long> {

    Optional<Login> findByEmail(String email);
}
