package com.te.carsinformation.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.te.carsinformation.dto.AdminDetails;
import com.te.carsinformation.dto.CarDetails;

public interface UserService {

public List<CarDetails>  getAllCarDetails();
public List<CarDetails>  searchCarDetails(String search);

}
