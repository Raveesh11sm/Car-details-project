package com.te.carsinformation.modals;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.te.carsinformation.dto.CarDetails;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CarDetailsResponse {

	private boolean error;
	private String message;
	
	private List<CarDetails> allCarsDetails;

	public boolean isError() {
		return error;
	}

	public void setError(boolean error) {
		this.error = error;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<CarDetails> getAllCarsDetails() {
		return allCarsDetails;
	}

	public void setAllCarsDetails(List<CarDetails> allCarsDetails) {
		this.allCarsDetails = allCarsDetails;
	}

	public CarDetailsResponse(boolean error, String message, List<CarDetails> allCarsDetails) {
		super();
		this.error = error;
		this.message = message;
		this.allCarsDetails = allCarsDetails;
	}
	
	
	
}
