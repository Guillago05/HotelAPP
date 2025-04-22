package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.models.dto.UsuarioDto;
import com.guille.backend.hotelapp.backend_hotelapp.models.dto.mapper.DtoMapperUsuario;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Login;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Rol;
import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Usuario;
import com.guille.backend.hotelapp.backend_hotelapp.models.requests.UsuarioRequest;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.RolRepository;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Login registroUsuario(UsuarioRequest usuarioRequest) {
        String passwordBc = passwordEncoder.encode(usuarioRequest.getContrasenia());
        Optional<Rol> o = rolRepository.findByName("ROLE_USER");
        Usuario usuario = new Usuario();
        if (o.isPresent()) {
            usuario.setEmail(usuarioRequest.getEmail());
            usuario.setContrasenia(passwordBc);
            usuario.setRol(o.orElseThrow());
        }
        return usuarioRepository.save(usuario);
    }

    @Override
    public Optional<UsuarioDto> obtenerUsuarioPorId(Long id) {
        return usuarioRepository.findById(id).map(u -> DtoMapperUsuario
                .builder()
                .setUsuario(u)
                .build());
    }

    @Override
    public Optional<UsuarioDto> obtenerUsuarioPorCorreo(String email) {
        return usuarioRepository.findByEmail(email).map(u -> DtoMapperUsuario
                .builder()
                .setUsuario(u)
                .build());
    }

}
