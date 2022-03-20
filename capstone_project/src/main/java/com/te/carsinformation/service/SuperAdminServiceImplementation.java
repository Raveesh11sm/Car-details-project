package com.te.carsinformation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.te.carsinformation.dao.CarDetailsDao;
import com.te.carsinformation.dto.CarDetails;
import com.te.carsinformation.modals.SuperAdminResponse;

@Service
public class SuperAdminServiceImplementation implements SuperAdminService{

	@Autowired
	private CarDetailsDao carDetailsDao;
	
	@Override
	public List<CarDetails> getAllCarDetails() {
		return (List<CarDetails>) carDetailsDao.findAll();
	}

	
}
