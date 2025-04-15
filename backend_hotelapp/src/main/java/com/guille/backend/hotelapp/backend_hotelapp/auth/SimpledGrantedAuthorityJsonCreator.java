package com.guille.backend.hotelapp.backend_hotelapp.auth;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimpledGrantedAuthorityJsonCreator {
    @JsonCreator
    public SimpledGrantedAuthorityJsonCreator(@JsonProperty("authority") String role) {

    }
}
