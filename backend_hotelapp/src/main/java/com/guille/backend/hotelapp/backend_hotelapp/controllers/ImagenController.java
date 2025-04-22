package com.guille.backend.hotelapp.backend_hotelapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Imagen;
import com.guille.backend.hotelapp.backend_hotelapp.services.ImagenService;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/imagenes")
public class ImagenController {

    @Autowired
    private ImagenService service;

    @GetMapping()
    public List<Imagen> getImagenesByHotel(@RequestParam Long id) {
        return service.getImagenesByHotel(id);
    }
}
