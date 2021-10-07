package com.github.alisson.restapi.repositories;

import com.github.alisson.restapi.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITicketRepository extends JpaRepository<Ticket, Long> {

    @Modifying
    @Query("update Ticket t set t.status = ?1 where t.id in (?2)")
    void updateStatusByNumbers(String status, List<Long> ids);

    List<Ticket> findByOrderByNumberAsc();

}
