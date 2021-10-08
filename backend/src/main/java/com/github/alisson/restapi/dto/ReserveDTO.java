package com.github.alisson.restapi.dto;

import com.github.alisson.restapi.entities.Buyer;
import com.github.alisson.restapi.entities.Partner;
import com.github.alisson.restapi.entities.Reserve;
import com.github.alisson.restapi.entities.Ticket;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ReserveDTO implements Serializable {

    private Long id;
    private Partner partner;
    private Buyer buyer;
    private Date createAt;
    private Boolean confirmed;
    private List<Ticket> tickets;

    public ReserveDTO(Partner partner, Buyer buyer, List<Ticket> tickets) {
        this.partner = partner;
        this.buyer = buyer;
        this.tickets = tickets;
    }

    public ReserveDTO(Reserve reserve) {
        this.id = reserve.getId();
        this.partner = reserve.getPartner();
        this.buyer = reserve.getBuyer();
        this.createAt = reserve.getCreatedAt();
        this.confirmed = reserve.getConfirmed();
        this.tickets = reserve.getTickets();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Partner getPartner() {
        return partner;
    }

    public void setPartner(Partner partner) {
        this.partner = partner;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }
}
