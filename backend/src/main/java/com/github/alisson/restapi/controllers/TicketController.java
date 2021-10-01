package com.github.alisson.restapi.controllers;

import com.github.alisson.restapi.dto.TicketDTO;
import com.github.alisson.restapi.entities.Ticket;
import com.github.alisson.restapi.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/tickets")
public class TicketController {

    @Autowired
    private TicketService service;

    @GetMapping
    public ResponseEntity<List<TicketDTO>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping(value = "/generate")
    public ResponseEntity<String> generate(@RequestParam("items") Integer items) {
        if (items > 0) {
            service.generate(items);
            return ResponseEntity.ok(items + " tickets gerados com sucesso!");
        }

        return ResponseEntity.badRequest().body("Informe a quantidade de itens");
    }
}
