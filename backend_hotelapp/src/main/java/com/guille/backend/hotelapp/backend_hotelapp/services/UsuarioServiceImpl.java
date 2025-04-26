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

import jakarta.transaction.Transactional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public Login registroUsuario(UsuarioRequest usuarioRequest) {
        String passwordBc = passwordEncoder.encode(usuarioRequest.getContrasenia());
        Optional<Rol> o = rolRepository.findByName("ROLE_USER");
        Usuario usuario = new Usuario();
        if (o.isPresent()) {
            usuario.setEmail(usuarioRequest.getEmail());
            usuario.setContrasenia(passwordBc);
            usuario.setRol(o.orElseThrow());
            usuario.setPuntos(0);
        }
        return usuarioRepository.save(usuario);
    }

    @Override
    @Transactional
    public Optional<UsuarioDto> obtenerUsuarioPorId(Long id) {
        return usuarioRepository.findById(id).map(u -> DtoMapperUsuario
                .builder()
                .setUsuario(u)
                .build());
    }

    @Override
    @Transactional
    public Optional<UsuarioDto> obtenerUsuarioPorCorreo(String email) {
        return usuarioRepository.findByEmail(email).map(u -> DtoMapperUsuario
                .builder()
                .setUsuario(u)
                .build());
    }

    @Override
    @Transactional
    public void eliminarCuentaUsuario(String email) {
        Usuario usuarioBD = usuarioRepository.findByEmail(email)
                .orElseThrow();
        usuarioRepository.delete(usuarioBD);
    }

    @Override
    @Transactional
    public Optional<UsuarioDto> modificarDatosPorCorreo(Usuario datosNuevos, String email) {
        Optional<Usuario> o = usuarioRepository.findByEmail(email);

        if (o.isPresent()) {
            Usuario usuarioDb = o.get();

            boolean modificado = false;

            if (datosNuevos.getNombre() != null && !datosNuevos.getNombre().isEmpty()
                    && !datosNuevos.getNombre().equals(usuarioDb.getNombre())) {
                usuarioDb.setNombre(datosNuevos.getNombre());
                modificado = true;
            }
            if (datosNuevos.getApellidos() != null && !datosNuevos.getApellidos().isEmpty()
                    && !datosNuevos.getApellidos().equals(usuarioDb.getApellidos())) {
                usuarioDb.setApellidos(datosNuevos.getApellidos());
                modificado = true;
            }

            if (datosNuevos.getDNI() != null && !datosNuevos.getDNI().isEmpty()
                    && !datosNuevos.getDNI().equals(usuarioDb.getDNI())) {
                usuarioDb.setDNI(datosNuevos.getDNI());
                modificado = true;
            }
            if (datosNuevos.getTelefono() != null && !datosNuevos.getTelefono().isEmpty()
                    && !datosNuevos.getTelefono().equals(usuarioDb.getTelefono())) {
                usuarioDb.setTelefono(datosNuevos.getTelefono());
                modificado = true;
            }
            if (datosNuevos.getContrasenia() != null && !datosNuevos.getContrasenia().isEmpty()) {
                String nuevaContraseniaCifrada = passwordEncoder.encode(datosNuevos.getContrasenia());
                if (!nuevaContraseniaCifrada.equals(usuarioDb.getContrasenia())) { // O usa matches
                    usuarioDb.setContrasenia(nuevaContraseniaCifrada);
                    modificado = true;
                }
            }
            Usuario usuarioFinal;
            if (modificado) {
                usuarioFinal = usuarioRepository.save(usuarioDb);
            } else {
                usuarioFinal = usuarioDb; // No hubo cambios
            }
            return Optional.of(DtoMapperUsuario.builder().setUsuario(usuarioFinal).build());
        } else {
            return Optional.empty(); // Usuario no encontrado
        }
    }

    @Override
    @Transactional
    public Optional<UsuarioDto> eliminarPuntos(Long id) {
        Optional<Usuario> o = usuarioRepository.findById(id);
        Usuario u = null;
        if (o.isPresent()) {
            Usuario usuarioDb = o.orElseThrow();
            usuarioDb.setPuntos(0);
            u = usuarioRepository.save(usuarioDb);
        }
        return Optional.of(DtoMapperUsuario.builder().setUsuario(u).build());
    }

}
