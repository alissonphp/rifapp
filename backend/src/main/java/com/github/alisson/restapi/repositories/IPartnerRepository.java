package com.github.alisson.restapi.repositories;

import com.github.alisson.restapi.entities.Partner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPartnerRepository extends JpaRepository<Partner, Long> {
    Partner findByCode(String code);
}
