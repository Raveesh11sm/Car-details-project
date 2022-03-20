package com.te.carsinformation.dao;

import org.springframework.data.repository.CrudRepository;

import com.te.carsinformation.dto.AdminDetails;

public interface AdminDao extends CrudRepository<AdminDetails, Integer>{

	AdminDetails findByUsername(String name);
	

	
}
