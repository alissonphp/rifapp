package com.github.alisson.restapi.controllers;

import com.github.alisson.restapi.dto.ReserveDTO;
import com.github.alisson.restapi.services.ReserveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/reserves")
public class ReserveController {

    @Autowired
    private ReserveService service;

    @PostMapping
    public ResponseEntity<ReserveDTO> save(@RequestBody ReserveDTO reserveDTO) {
        return ResponseEntity.ok(service.save(reserveDTO));
    }
}
