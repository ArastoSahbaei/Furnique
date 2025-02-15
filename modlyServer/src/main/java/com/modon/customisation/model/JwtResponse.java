package com.modon.customisation.model;


import java.io.Serializable;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -109977752225907312L;

    private final String jwttoken;

    public JwtResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }

    public String getToken() {
        return this.jwttoken;
    }
}
