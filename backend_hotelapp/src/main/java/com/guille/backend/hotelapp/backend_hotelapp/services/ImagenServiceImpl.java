package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Imagen;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.ImagenRepository;

@Service
public class ImagenServiceImpl implements ImagenService {

    @Autowired
    private ImagenRepository repository;

    @Override
    public List<Imagen> getImagenesByHotel(Long id_hotel) {
        List<Imagen> imagenes = repository.getImagenesByHotel(id_hotel);

        for (Imagen imagen : imagenes) {
            imagen.setHotel(null);
        }
        return imagenes;
    }

}
