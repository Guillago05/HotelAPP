package com.guille.backend.hotelapp.backend_hotelapp.services;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Login;
import com.guille.backend.hotelapp.backend_hotelapp.entities.models.requests.UsuarioRequest;

public interface UsuarioService {

    Login registroUsuario(UsuarioRequest usuario);
}
