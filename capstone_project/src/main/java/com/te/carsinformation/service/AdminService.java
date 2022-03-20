package com.te.carsinformation.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.te.carsinformation.dto.AdminDetails;
import com.te.carsinformation.dto.CarDetails;

public interface AdminService {


	AdminDetails saveSignupData(AdminDetails adminDetails);
	AdminDetails adminDetails(String name);
	List<CarDetails> getAllCarDetails(HttpServletRequest request);
	CarDetails addCarDetails(CarDetails carDetails, HttpServletRequest request);
	CarDetails updateCarDetails(CarDetails carDetails, HttpServletRequest request);
	boolean deleteCarDetails(int carId);
	boolean checkIfUsernameExists(String username);



}
