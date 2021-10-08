package com.github.alisson.restapi.services;

import com.github.alisson.restapi.dto.ConfirmReserveDTO;
import com.github.alisson.restapi.dto.ReserveDTO;
import com.github.alisson.restapi.entities.Buyer;
import com.github.alisson.restapi.entities.Reserve;
import com.github.alisson.restapi.entities.Ticket;
import com.github.alisson.restapi.repositories.IBuyerRepository;
import com.github.alisson.restapi.repositories.IReserveRepository;
import com.github.alisson.restapi.repositories.ITicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class ReserveService {

    @Autowired
    private IReserveRepository repository;

    @Autowired
    private IBuyerRepository buyerRepository;

    @Autowired
    private ITicketRepository ticketRepository;

    @Transactional
    public List<Reserve> all() {
//        return repository.findAll().stream().map(ReserveDTO::new).collect(Collectors.toList());
        return repository.findAll();
    }

    @Transactional
    public ReserveDTO save(ReserveDTO reserveDTO) {
        Buyer check = buyerRepository.findByPhoneOrDocument(reserveDTO.getBuyer().getPhone(), reserveDTO.getBuyer().getDocument());
        reserveDTO.setBuyer(Objects.requireNonNullElseGet(check, () -> buyerRepository.save(reserveDTO.getBuyer())));
        Reserve reserve = repository.save(new Reserve(reserveDTO.getPartner(), reserveDTO.getBuyer(), reserveDTO.getTickets()));
        reserveDTO.setId(reserve.getId());
        reserveDTO.setConfirmed(reserve.getConfirmed());
        ticketRepository.updateStatusByNumbers("reservado", reserveDTO.getTickets()
                .stream()
                .map(Ticket::getId)
                .collect(Collectors.toList()));
        return reserveDTO;
    }

    @Transactional
    public String confirm(ConfirmReserveDTO confirmReserveDTO) {
        try {
            Reserve reserve = repository.getById(confirmReserveDTO.getId());
            reserve.setConfirmed(confirmReserveDTO.getConfirmed());
            repository.save(reserve);
            return "reserva atualizada";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
