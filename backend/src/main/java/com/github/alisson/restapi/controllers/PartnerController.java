package com.github.alisson.restapi.controllers;

import com.github.alisson.restapi.dto.PartnerDTO;
import com.github.alisson.restapi.services.PartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/partners")
public class PartnerController {

    @Autowired
    private PartnerService service;
    @GetMapping
    public ResponseEntity<List<PartnerDTO>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @PostMapping
    public ResponseEntity<String> save(@RequestBody PartnerDTO partner) {
        service.save(partner.getName(), partner.getPhone(), partner.getCode());
        return ResponseEntity.ok("Parceiro cadastrado com sucesso");
    }

    @GetMapping(value = "/{code}")
    public ResponseEntity<PartnerDTO> findByCodeLink(@PathVariable String code) {
        return ResponseEntity.ok(service.findByCodeLink(code));
    }
}
