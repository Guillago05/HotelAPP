package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Login;

public interface LoginRepository extends CrudRepository<Login, Long> {

    Optional<Login> findByEmail(String email);
}
