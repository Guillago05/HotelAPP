package com.guille.backend.hotelapp.backend_hotelapp.models.dto.mapper;

import com.guille.backend.hotelapp.backend_hotelapp.models.dto.UsuarioDto;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;

public class DtoMapperUsuario {

    private Usuario usuario;

    private DtoMapperUsuario() {
    }

    public static DtoMapperUsuario builder() {
        return new DtoMapperUsuario();
    }

    public DtoMapperUsuario setUsuario(Usuario user) {
        this.usuario = user;
        return this;
    }

    public UsuarioDto build() {
        if (usuario == null) {
            throw new RuntimeException("Debe pasar el entity user");
        }
        UsuarioDto userDto = new UsuarioDto(this.usuario.getId(), this.usuario.getEmail(), this.usuario.getNombre(),
                this.usuario.getApellidos(), this.usuario.getTelefono(), this.usuario.getDNI(),
                this.usuario.getPuntos(), this.usuario.getRol());
        return userDto;
    }
}
