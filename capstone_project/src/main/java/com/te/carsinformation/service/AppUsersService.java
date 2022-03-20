package com.te.carsinformation.service;

import java.util.List;

import com.te.carsinformation.dto.CarDetails;

public interface AppUsersService {

	public List<CarDetails> getAllCarDetails();

	public List<CarDetails> searchCarDetails(String search);
	

}
