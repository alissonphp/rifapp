package com.github.alisson.restapi.dto;

import com.github.alisson.restapi.entities.Partner;

import java.io.Serializable;

public class PartnerDTO implements Serializable {
    private Long id;
    private String code;
    private String name;
    private String phone;
    private String photo_url;

    public PartnerDTO(Long id, String name, String phone, String photo_url, String code) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.phone = phone;
        this.photo_url = photo_url;
    }

    public PartnerDTO(Partner partner) {
        this.id = partner.getId();
        this.code = partner.getCode();
        this.name = partner.getName();
        this.phone = partner.getPhone();
        this.photo_url = partner.getPhoto_url();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhoto_url() {
        return photo_url;
    }

    public void setPhoto_url(String photo_url) {
        this.photo_url = photo_url;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
