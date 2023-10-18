package com.bc123.user.service;

import com.bc123.user.dto.UserDto;

import java.util.UUID;

public interface UserService {
	
	UserDto fetchUserByEmail(String email);
	
	UserDto fetchUserById(UUID id);
	
	UserDto createUser(UserDto userDto);
	
	UserDto updateUser(UUID id, UserDto userDto);
}
