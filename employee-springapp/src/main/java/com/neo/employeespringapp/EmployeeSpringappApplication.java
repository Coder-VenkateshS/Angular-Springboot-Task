package com.neo.employeespringapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({ "controller" })
@EntityScan({"model"})
@EnableJpaRepositories({"repository"})
public class EmployeeSpringappApplication {

	public static void main(String[] args) {
		System.out.println("Welcome to Spring Employee app");
		SpringApplication.run(EmployeeSpringappApplication.class, args);
	}

}
