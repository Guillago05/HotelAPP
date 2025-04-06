package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guille.backend.hotelapp.backend_hotelapp.entities.Imagen;
import com.guille.backend.hotelapp.backend_hotelapp.repositories.ImagenRepository;

@Service
public class ImagenesServiceImpl implements ImagenService {

    @Autowired
    private ImagenRepository repository;

    @Override
    public List<Imagen> getImagenesByHotel(Long id_hotel) {
        return repository.getImagenesByHotel(id_hotel);
    }

}
