package com.github.alisson.restapi.repositories;

import com.github.alisson.restapi.entities.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IBuyerRepository extends JpaRepository<Buyer, Long> {
    @Query("select b from Buyer b where b.phone = ?1 or b.document = ?2")
    Buyer findByPhoneOrDocument(String phone, String document);
}
