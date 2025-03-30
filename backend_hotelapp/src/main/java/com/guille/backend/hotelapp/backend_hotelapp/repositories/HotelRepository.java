package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Hotel;

public interface HotelRepository extends CrudRepository<Hotel, Long> {

    @Query(value = """
                SELECT DISTINCT h FROM Hotel h
                JOIN h.habitaciones hab
                LEFT JOIN hab.reservas r
                    ON (r.fechaLlegada <= :fechaSalida AND r.fechaSalida >= :fechaLlegada)
                    OR (r.fechaLlegada <= :fechaLlegada AND r.fechaSalida >= :fechaSalida)
                    OR (r.fechaLlegada >= :fechaLlegada AND r.fechaSalida <= :fechaSalida)
                WHERE h.ciudad = :ciudad
                AND hab.personas >= :numPersonas
                AND hab.ocupado = false
                AND r.id IS NULL
            """)
    List<Hotel> findHotelesDisponibles(
            @Param("ciudad") String ciudad,
            @Param("fechaLlegada") Date fechaLlegada,
            @Param("fechaSalida") Date fechaSalida,
            @Param("numPersonas") int numPersonas);
}
