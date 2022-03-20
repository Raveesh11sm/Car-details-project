package com.te.carsinformation.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.te.carsinformation.dao.CarDetailsDao;
import com.te.carsinformation.dto.AdminDetails;
import com.te.carsinformation.dto.CarDetails;

@Service
public  class UserServiceImplementation implements UserService {

	@Autowired
	private CarDetailsDao carDetailsDao;

	@Override
	public List<CarDetails> getAllCarDetails() {

		return (List<CarDetails>) carDetailsDao.findAll();
	}

	@Override
	public List<CarDetails> searchCarDetails(String searchData) {
		
		String search = searchData.toUpperCase();
		if (search.startsWith("ELECTRIC")) {
			return (List<CarDetails>) carDetailsDao.findByFuelType("Electric");
		}

		if (search.startsWith("DIESEL")) {
			return (List<CarDetails>) carDetailsDao.findByFuelType("Diesel");
		}
		if (search.startsWith("PETROL")) {
			return (List<CarDetails>) carDetailsDao.findByFuelType("Petrol");
		}
		if (search.equalsIgnoreCase("BMW") || search.equalsIgnoreCase("Mercedes") || search.equalsIgnoreCase("Audi")
				|| search.equalsIgnoreCase("Maruthi")|| search.equalsIgnoreCase("Toyota") || search.equalsIgnoreCase("Suzuki")
				|| search.equalsIgnoreCase("Tata")) {
			return (List<CarDetails>) carDetailsDao.findByCompany(search);
		}
		if (search.equalsIgnoreCase("BMW 6520") || search.equalsIgnoreCase("Bmw 500D")
				|| search.equalsIgnoreCase("Benz S400") || search.equalsIgnoreCase("Audi q7")
				|| search.equalsIgnoreCase("Nano") || search.equalsIgnoreCase("Maruthi 800")
				|| search.equalsIgnoreCase("Brezza")|| search.equalsIgnoreCase("Toyota Hybrid Electric")
				|| search.equalsIgnoreCase("Swift Desire")) {
			return (List<CarDetails>) carDetailsDao.findByName(search);
		}
		return null;
		
		
	}

}
