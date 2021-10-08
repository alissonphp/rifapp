package com.github.alisson.restapi;

import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RestapiApplication {

    @Bean
    public Hibernate5Module datatypeHibernateModule() {
        return new Hibernate5Module();
    }
    public static void main(String[] args) {
        SpringApplication.run(RestapiApplication.class, args);
    }

}
