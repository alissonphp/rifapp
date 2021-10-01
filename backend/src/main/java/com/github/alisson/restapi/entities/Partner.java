package com.github.alisson.restapi.entities;

import javax.persistence.*;

@Entity
@Table(name = "partners")
public class Partner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "code_link")
    private String code;
    private String name;
    private String phone;
    private String photo_url;

    public Partner() {}

    public Partner(Long id, String name, String phone, String photo_url) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.photo_url = photo_url;
    }

    public Partner(String name, String phone, String code) {
        this.name = name;
        this.code = code;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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
}
