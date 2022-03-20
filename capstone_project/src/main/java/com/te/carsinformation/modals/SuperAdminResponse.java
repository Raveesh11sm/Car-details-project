package com.te.carsinformation.modals;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.te.carsinformation.dto.CarDetails;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SuperAdminResponse {

	private boolean error;
	private String message;
	private List<CarDetails> carDetailsWithAdminName;
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
	public List<CarDetails> getCarDetailsWithAdminName() {
		return carDetailsWithAdminName;
	}
	public void setCarDetailsWithAdminName(List<CarDetails> carDetailsWithAdminName) {
		this.carDetailsWithAdminName = carDetailsWithAdminName;
	}
	public SuperAdminResponse(boolean error, String message, List<CarDetails> carDetailsWithAdminName) {
		super();
		this.error = error;
		this.message = message;
		this.carDetailsWithAdminName = carDetailsWithAdminName;
	}
	
	
}
