package com.github.alisson.restapi.dto;

import java.io.Serializable;

public class ConfirmReserveDTO implements Serializable {

    private Long id;
    private Boolean confirmed;

    public ConfirmReserveDTO(Long id, Boolean confirmed) {
        this.id = id;
        this.confirmed = confirmed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }
}
