package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Habitacion;

public interface HabitacionRepository extends CrudRepository<Habitacion, Long> {

    @Query("""
                SELECT h FROM Habitacion h
                JOIN h.hotel hotel
                WHERE hotel.nombre = :nombreHotel
                AND h.personas = :personas
                AND NOT EXISTS (
                    SELECT 1 FROM Reserva r
                    WHERE r.hotel.id = hotel.id
                    AND r.fechaLlegada < :fechaSalida
                    AND r.fechaSalida > :fechaLlegada
                    AND r.habitacion.id = h.id
                )
                ORDER BY h.precio_noche ASC
            """)
    List<Habitacion> findHabitacionesDisponiblesHotel(
            @Param("nombreHotel") String nombreHotel,
            @Param("fechaLlegada") Date fechaLlegada,
            @Param("fechaSalida") Date fechaSalida,
            @Param("personas") int personas);

}
