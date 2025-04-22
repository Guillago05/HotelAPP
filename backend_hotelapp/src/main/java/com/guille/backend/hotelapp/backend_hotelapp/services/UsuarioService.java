package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.Optional;

import com.guille.backend.hotelapp.backend_hotelapp.models.dto.UsuarioDto;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Login;
import com.guille.backend.hotelapp.backend_hotelapp.models.requests.UsuarioRequest;

public interface UsuarioService {

    Login registroUsuario(UsuarioRequest usuario);

    Optional<UsuarioDto> obtenerUsuarioPorId(Long id);

    Optional<UsuarioDto> obtenerUsuarioPorCorreo(String email);

}
