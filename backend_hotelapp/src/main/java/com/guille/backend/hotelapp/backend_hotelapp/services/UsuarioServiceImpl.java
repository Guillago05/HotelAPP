package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.guille.backend.hotelapp.backend_hotelapp.entities.models.Usuario;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public Optional<Usuario> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional()
    public Usuario registrar(Usuario usuario) {
        String passwordBc = passwordEncoder.encode(usuario.getContrasenia());
        usuario.setContrasenia(passwordBc);
        return repository.save(usuario);
    }

    @Override
    @Transactional
    public Optional<Usuario> modificarDatos(Usuario usuario, Long id) {
        // TODO
        Optional<Usuario> o = this.findById(id);
        Usuario usuarioOptional = null;
        if (o.isPresent()) {
            Usuario usuarioDb = o.orElseThrow();
            usuarioDb.setApellidos(usuario.getApellidos());
            String passwordBc = passwordEncoder.encode(usuario.getContrasenia());
            usuarioDb.setContrasenia(passwordBc);
            usuarioDb.setDNI(usuario.getDNI());
            usuarioDb.setNombre(usuario.getNombre());
        }
        return null;
    }

    @Override
    public void eliminarUsuario(Long id) {
        repository.deleteById(id);
    }

}
