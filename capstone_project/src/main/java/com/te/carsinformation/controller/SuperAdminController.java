package com.te.carsinformation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.te.carsinformation.dto.CarDetails;
import com.te.carsinformation.modals.SuperAdminResponse;
import com.te.carsinformation.service.SuperAdminService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/superAdmin")
public class SuperAdminController {
	
	@Autowired
	private SuperAdminService superAdminService;
	
	@GetMapping("/carinfo")
	public ResponseEntity<?> getAllCarDetailsWithAdminDetails() {
		List<CarDetails> allCarDetails=superAdminService.getAllCarDetails();
		if (allCarDetails!=null) {
			return ResponseEntity.ok(new SuperAdminResponse(false,"success",allCarDetails));
		} else {
			return ResponseEntity.ok(new SuperAdminResponse(true,"Data not Available",null));
		}
	}
	
}
