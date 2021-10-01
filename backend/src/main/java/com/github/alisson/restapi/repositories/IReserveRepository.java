package com.github.alisson.restapi.repositories;

import com.github.alisson.restapi.entities.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReserveRepository extends JpaRepository<Reserve, Long> { }
