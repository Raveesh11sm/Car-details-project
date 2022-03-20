package com.te.carsinformation.modals;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.te.carsinformation.dto.CarDetails;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AppUsersResponse {
	
	private List<CarDetails> allCarsDetails;
	
	private List<CarDetails> searchResults;
	
	private String message;
	private boolean error;
	public List<CarDetails> getAllCarsDetails() {
		return allCarsDetails;
	}
	public void setAllCarsDetails(List<CarDetails> allCarsDetails) {
		this.allCarsDetails = allCarsDetails;
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
	public AppUsersResponse(List<CarDetails> allCarsDetails, List<CarDetails> searchResults, String message,
			boolean error) {
		super();
		this.allCarsDetails = allCarsDetails;
		this.searchResults = searchResults;
		this.message = message;
		this.error = error;
	}
	public AppUsersResponse() {
		super();
	}
	
	

}
