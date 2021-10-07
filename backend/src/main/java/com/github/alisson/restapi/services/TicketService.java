package com.github.alisson.restapi.services;

import com.github.alisson.restapi.dto.TicketDTO;
import com.github.alisson.restapi.entities.Ticket;
import com.github.alisson.restapi.repositories.ITicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketService {

    @Autowired
    private ITicketRepository repository;

    public List<TicketDTO> getAll() {
        List<Ticket> results = repository.findByOrderByNumberAsc();
        return results.stream().map(TicketDTO::new).collect(Collectors.toList());
    }

    public void generate(Integer items) {
        for (int i = 0; i < items; ++i) {
            repository.save(new Ticket((long) i, "disponível"));
        }
    }

}
