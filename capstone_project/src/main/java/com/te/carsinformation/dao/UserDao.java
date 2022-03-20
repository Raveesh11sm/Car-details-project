package com.te.carsinformation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.te.carsinformation.dto.CarDetails;

public interface UserDao extends JpaRepository<CarDetails, Integer>{
	
	public CarDetails findById(int carId); 
	public CarDetails findByName(String carName);
	public CarDetails findByCompany(String carCompany);

}
