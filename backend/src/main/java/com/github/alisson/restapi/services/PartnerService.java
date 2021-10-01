package com.github.alisson.restapi.services;

import com.github.alisson.restapi.dto.PartnerDTO;
import com.github.alisson.restapi.entities.Partner;
import com.github.alisson.restapi.repositories.IPartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PartnerService {

    @Autowired
    private IPartnerRepository repository;

    public Partner save(String name, String phone, String code) {
        return repository.save(new Partner(name, phone, code));
    }

    public List<PartnerDTO> getAll() {
        List<Partner> results = repository.findAll();
        return results.stream().map(PartnerDTO::new).collect(Collectors.toList());
    }

    public PartnerDTO findByCodeLink(String code) {
        return new PartnerDTO(repository.findByCode(code));
    }
}
