package com.guille.backend.hotelapp.backend_hotelapp.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // @Bean
    // SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // return http.authorizeHttpRequests()
    // .requestMatchers(HttpMethod.GET,"habitaciones/disponibles")
    // .build();
    // }

}
