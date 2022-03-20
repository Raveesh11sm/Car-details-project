package com.te.carsinformation.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.te.carsinformation.dto.CarDetails;

public interface CarDetailsDao extends CrudRepository<CarDetails, Integer>{

	List<CarDetails> findByCompany(String company);
	List<CarDetails> findByName(String name);
	List<CarDetails> findByFuelType(String fuelType);
	CarDetails findById(int id);
	List<CarDetails> findByAdminName(String name);

}
