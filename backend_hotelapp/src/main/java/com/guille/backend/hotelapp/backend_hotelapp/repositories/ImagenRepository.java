package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Imagen;

public interface ImagenRepository extends CrudRepository<Imagen, Long> {

    @Query("""
            Select i from Imagen i
            where i.hotel.id = :hotel_id
            """)
    List<Imagen> getImagenesByHotel(@Param("hotel_id") Long hotel_id);
}
