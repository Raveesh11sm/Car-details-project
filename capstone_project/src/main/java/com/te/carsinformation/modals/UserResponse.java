package com.te.carsinformation.modals;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.te.carsinformation.dto.CarDetails;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponse {

	private List<CarDetails> allCarDetails;
	
	private List<CarDetails> searchResults;
	
	private String message;
	private boolean error;
	
	
	public List<CarDetails> getAllCarDetails() {
		return allCarDetails;
	}
	public void setAllCarDetails(List<CarDetails> allCarDetails) {
		this.allCarDetails = allCarDetails;
	}
	public List<CarDetails> getSearchResults() {
		return searchResults;
	}
	public void setSearchResults(List<CarDetails> searchResults) {
		this.searchResults = searchResults;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isError() {
		return error;
	}
	public void setError(boolean error) {
		this.error = error;
	}
	public UserResponse(List<CarDetails> allCarDetails, List<CarDetails> searchResults, String message, boolean error) {
		super();
		this.allCarDetails = allCarDetails;
		this.searchResults = searchResults;
		this.message = message;
		this.error = error;
	}
	public UserResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
