package com.bc123.user.controller;

import com.bc123.user.dto.UserDto;
import com.bc123.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {
	
	@Mock
	private UserService userService;
	
	@InjectMocks
	private UserController userController;
	
	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
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
}
