package com.github.alisson.restapi.repositories;

import com.github.alisson.restapi.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITicketRepository extends JpaRepository<Ticket, Long> {

}
