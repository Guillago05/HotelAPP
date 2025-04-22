package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Login;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.LoginRepository;

@Service
public class JpaUserDetailsService implements UserDetailsService {
    @Autowired
    private LoginRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Login> o = repository.findByEmail(email);

        if (!o.isPresent()) {
            throw new UsernameNotFoundException("Correo no existe");
        }
        Login login = o.orElseThrow();
        GrantedAuthority authority = new SimpleGrantedAuthority(login.getRol().getName());
        return new User(login.getEmail(), login.getContrasenia(),
                true,
                true,
                true,
                true,
                List.of(authority));
    }

}
