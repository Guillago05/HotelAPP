package com.guille.backend.hotelapp.backend_hotelapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;

import jakarta.transaction.Transactional;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

        Optional<Usuario> findByEmail(String email);

        @Modifying
        void deleteByEmail(String email);

        @Transactional
        @Modifying
        @Query("UPDATE Usuario u SET " +
                        "u.nombre = :nuevoNombre, " +
                        "u.apellidos = :nuevosApellidos, " +
                        "u.telefono = :nuevoTelefono, " +
                        "u.DNI = :nuevoDNI, " +
                        "u.contrasenia = :nuevaContrasenia " +
                        "WHERE u.email = :emailUsuario")
        int modificarDatosUsuarioPorEmail(
                        @Param("emailUsuario") String emailUsuario,
                        @Param("nuevoNombre") String nuevoNombre,
                        @Param("nuevosApellidos") String nuevosApellidos,
                        @Param("nuevoTelefono") String nuevoTelefono,
                        @Param("nuevoDNI") String nuevoDNI,
                        @Param("nuevaContrasenia") String nuevaContrasenia);

}
