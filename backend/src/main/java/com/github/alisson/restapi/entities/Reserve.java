package com.github.alisson.restapi.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "reserves")
public class Reserve {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private Buyer buyer;

    @ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinTable(name = "reserve_tickets", joinColumns = {@JoinColumn(name = "reserve_id")}, inverseJoinColumns = {@JoinColumn(name = "ticket_id")})
    private List<Ticket> tickets;

    @Column(name = "created_at")
    @Temporal(TemporalType.DATE)
    private Date createdAt = new Date();

    private Boolean confirmed = false;

    public Reserve(Partner partner, Buyer buyer, List<Ticket> tickets) {
        this.partner = partner;
        this.buyer = buyer;
        this.tickets = tickets;
    }

    public Reserve() {
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

    public Boolean getConfirmed() {
        return confirmed;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }
}
