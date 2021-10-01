package com.github.alisson.restapi.dto;

import com.github.alisson.restapi.entities.Ticket;

import java.io.Serializable;

public class TicketDTO implements Serializable {
    private Long id;
    private Long number;
    private String status;

    public TicketDTO() {}
    public TicketDTO(Ticket ticket) {
        this.id = ticket.getId();
        this.number = ticket.getNumber();
        this.status = ticket.getStatus();
    }
    public TicketDTO(Long id, Long number, String status) {
        this.id = id;
        this.number = number;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
