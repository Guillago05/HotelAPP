package com.guille.backend.hotelapp.backend_hotelapp.services;

import java.util.List;

import com.guille.backend.hotelapp.backend_hotelapp.models.entities.Imagen;

public interface ImagenService {

    List<Imagen> getImagenesByHotel(Long id_hotel);
}
