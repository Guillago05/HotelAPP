package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Hotel;

public interface HotelRepository extends CrudRepository<Hotel, Long> {

}
