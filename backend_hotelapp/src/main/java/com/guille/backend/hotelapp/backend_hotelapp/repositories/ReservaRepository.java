package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Reserva;

public interface ReservaRepository extends CrudRepository<Reserva, Long> {

    @Query("SELECT r FROM Reserva r WHERE r.usuario.email = :email")
    List<Reserva> findReservasByUsuarioEmail(@Param("email") String email);

    @Modifying
    @Query("DELETE FROM Reserva r WHERE r.usuario.email = :email")
    void deleteReservasByUsuarioEmail(@Param("email") String email);

}
