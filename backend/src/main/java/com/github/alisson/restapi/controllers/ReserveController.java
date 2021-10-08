package com.github.alisson.restapi.controllers;

import com.github.alisson.restapi.dto.ConfirmReserveDTO;
import com.github.alisson.restapi.dto.ReserveDTO;
import com.github.alisson.restapi.entities.Reserve;
import com.github.alisson.restapi.services.ReserveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/reserves")
public class ReserveController {

    @Autowired
    private ReserveService service;

    @GetMapping
    public ResponseEntity<List<Reserve>> list() {
        return ResponseEntity.ok(service.all());
    }

    @PostMapping
    public ResponseEntity<ReserveDTO> save(@RequestBody ReserveDTO reserveDTO) {
        return ResponseEntity.ok(service.save(reserveDTO));
    }

    @PostMapping(value = "/confirm")
    public ResponseEntity<String> confirm(@RequestBody ConfirmReserveDTO confirmReserveDTO) {
        return ResponseEntity.ok(service.confirm(confirmReserveDTO));
    }
}
