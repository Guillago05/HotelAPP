package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Hotel;

public interface HotelRepository extends CrudRepository<Hotel, Long> {

        @Query("""
                        SELECT DISTINCT h FROM Hotel h
                        WHERE h.ciudad = :ciudad
                        AND EXISTS (
                           SELECT 1 from Habitacion hab
                           WHERE hab.hotel.id = h.id
                           AND hab.personas = :numPersonas
                           AND NOT EXISTS(
                           SELECT 1 FROM Reserva r
                           WHERE r.habitacion.id = hab.id
                           AND r.fechaLlegada < :fechaSalida
                           AND r.fechaSalida > :fechaLlegada))
                           """)

        List<Hotel> findHotelesDisponibles(
                        @Param("ciudad") String ciudad,
                        @Param("fechaLlegada") Date fechaLlegada,
                        @Param("fechaSalida") Date fechaSalida,
                        @Param("numPersonas") int numPersonas);
}
