package com.bc123.user.controller;

import com.bc123.user.config.JwtService;
import com.bc123.user.dto.Auth;
import com.bc123.user.dto.UserDto;
import com.bc123.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import jakarta.ws.rs.core.MediaType;
import java.util.UUID;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


class UserControllerTest {
	
	@Mock
	private UserService userService;
	
	@Mock
	private JwtService jwtService;
	
	@Mock
	private MockMvc mockMvc;
	
	@InjectMocks
	private UserController userController;
	
	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
	}
	
	@Test
	void testGetById_ReturnsUserDto() {
		UUID userId = UUID.randomUUID();
		UserDto userDto = new UserDto(userId, "majahar", "majahar@gmail.com", "Test@123");
		
		when(userService.fetchUserById(userId)).thenReturn(userDto);
		
		UserDto response = userController.getById(userId);
		
		assertEquals(userDto, response);
	}
	
	@Test
	void testGetByEmail_ReturnsUserDto() {
		String email = "test@example.com";
		UserDto userDto = new UserDto(UUID.randomUUID(), "majahar", email, "Test@123");
		
		when(userService.fetchUserByEmail(email)).thenReturn(userDto);
		
		UserDto response = userController.getByEmail(email);
		
		assertEquals(userDto, response);
	}
	
	
	@Test
	void testCreateUser_ReturnsCreatedUserDto() {
		UserDto userDto = new UserDto(UUID.randomUUID(), "majahar", "majahar@gmail.com", "Test@123");
		
		when(userService.createUser(userDto)).thenReturn(userDto);
		
		UserDto response = userController.createUser(userDto);
		
		assertEquals(userDto, response);
	}
	
	@Test
	void testUpdatePassword_ReturnsUpdatedUserDto() {
		UUID userId = UUID.randomUUID();
		UserDto userDto = new UserDto(userId, "majahar", "majahar@gmail.com", "Test@123");
		
		when(userService.updateUser(userId, userDto)).thenReturn(userDto);
		
		UserDto response = userController.updatePassword(userId, userDto);
		
		assertEquals(userDto, response);
	}
	
	@Test
	void testGetToken_WithValidCredentials() throws Exception {
		Auth auth = new Auth("test@example.com", "password123");
		String expectedToken = "test-token";
		
		when(jwtService.generateToken(auth.getEmail(), auth.getPassword())).thenReturn(expectedToken);
		
		mockMvc.perform(MockMvcRequestBuilders
						.post("/api/v1/users/login")
						.content("{\"email\":\"test@example.com\",\"password\":\"password123\"}")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(expectedToken));
	}
	@Test
	void testGetToken_WithInvalidCredentials() {
		Auth auth = new Auth(null, null);
		String responseEntity = userController.getToken(auth);
		assertEquals(null, responseEntity);
	}
}
