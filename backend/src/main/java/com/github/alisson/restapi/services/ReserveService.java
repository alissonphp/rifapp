package com.github.alisson.restapi.services;

import com.github.alisson.restapi.dto.ReserveDTO;
import com.github.alisson.restapi.entities.Buyer;
import com.github.alisson.restapi.repositories.IBuyerRepository;
import com.github.alisson.restapi.repositories.IReserveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReserveService {

    @Autowired
    private IReserveRepository repository;

    @Autowired
    private IBuyerRepository buyerRepository;

    public ReserveDTO save(ReserveDTO reserveDTO) {
        /**
         * check if buyer exists
         * if not, create
         */

        Buyer check = buyerRepository.findByPhoneOrDocument(reserveDTO.getBuyer().getPhone(), reserveDTO.getBuyer().getDocument());

        if(check != null) {
            reserveDTO.setBuyer(check);
        } else {
            reserveDTO.setBuyer(buyerRepository.save(reserveDTO.getBuyer()));
        }

        return reserveDTO;
    }
}
