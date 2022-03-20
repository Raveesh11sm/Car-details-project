package com.te.carsinformation.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.UnsupportedEncodingException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.DefaultMockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.te.carsinformation.dao.AdminDao;
import com.te.carsinformation.dao.UserDao;
import com.te.carsinformation.dto.AdminDetails;
import com.te.carsinformation.dto.MyAdminDetails;
import com.te.carsinformation.modals.AdminRequest;
import com.te.carsinformation.modals.AdminResponse;
import com.te.carsinformation.service.AdminService;
import com.te.carsinformation.util.JwtUtil;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class AdminControllerTest {

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext applicationContext;

	@MockBean
	private AuthenticationManager authenticationManager;

	@MockBean
	private UserDetailsService userDetailsService;

	@MockBean
	private JwtUtil jwtUtil;
	
	@MockBean
	private AdminDao adminDao;
	
	
	@MockBean
	private UserDao  dao;

	@MockBean
	private AdminService adminService;
	
	ObjectMapper mapper=new  ObjectMapper();

	@BeforeEach
	void setUp() throws Exception {
		mockMvc = MockMvcBuilders.webAppContextSetup(applicationContext).build();
	}

	@Test
	void testLoginAuthentication() throws JsonProcessingException, UnsupportedEncodingException, Exception {
		AdminRequest adminRequest = new AdminRequest("Rvsh", "1234");
		AdminDetails admin =new AdminDetails();
		admin.setId(1);
		admin.setUsername("Rvsh");
		admin.setPassword("1234");
		admin.setRole("ROLE_ADMIN");
		MyAdminDetails adminDetails=new MyAdminDetails(admin);

		when(adminService.checkIfUsernameExists(adminRequest.getUsername())).thenReturn(true);
		when(authenticationManager.authenticate(Mockito.any())).thenReturn(null);
		when(userDetailsService.loadUserByUsername(adminRequest.getUsername())).thenReturn(adminDetails);
		when(adminService.adminDetails(adminDetails.getUsername())).thenReturn(admin);
		when(jwtUtil.generateToken(adminDetails)).thenReturn("sgdfgkhljkhgjfhdfg");
		
		String contentAsString = mockMvc.perform(post("/admin/adminLogin").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(mapper.writeValueAsString(adminRequest)).accept(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk())
		.andReturn().getResponse().getContentAsString();
		
		AdminResponse readValue = mapper.readValue(contentAsString, AdminResponse.class);
		
		assertEquals("Authentication Success", readValue.getMessage());
	}

	@Test
	void testCreateSignupAuthenticationToken() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAllCarDetails() {
		fail("Not yet implemented");
	}

	@Test
	void testAddCarDetails() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdateCarDetails() {
		fail("Not yet implemented");
	}

	@Test
	void testDeleteCarDetails() {
		fail("Not yet implemented");
	}

}
