package com.te.carsinformation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.te.carsinformation.dto.CarDetails;
import com.te.carsinformation.modals.AppUsersResponse;
import com.te.carsinformation.service.AppUsersService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private AppUsersService appUsersService;
	
	
	@GetMapping("/carsInfo")
	public ResponseEntity<?> getCarByName() {
		
		List<CarDetails> carLists=appUsersService.getAllCarDetails();
		
		if (carLists!=null) {
			return ResponseEntity.ok(new AppUsersResponse(carLists,null,"success",false));
		} else {
			return ResponseEntity.ok(new AppUsersResponse(null,null,"data not available",true));
		}
	}
	
	@GetMapping("/searchCars")
	public ResponseEntity<?> searchCarDetails(String search) {
		List<CarDetails> searchCar=appUsersService.searchCarDetails(search);
		
		if (searchCar!=null) {
			return ResponseEntity.ok(new AppUsersResponse(null,searchCar,"success",false));
			
		} else {
			return ResponseEntity.ok(new AppUsersResponse(null,null,"not search found",true));
		}
		
		
	}
}
