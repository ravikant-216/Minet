package com.bc123.user.controller;

import com.bc123.user.dto.UserDto;
import com.bc123.user.service.UserService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

import static com.bc123.user.utils.Constants.BASE_URL;
import static com.bc123.user.utils.Constants.ID;

@Slf4j
@RestController
@RequestMapping(BASE_URL)
public class UserController {
	
	private UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping(ID)
	public UserDto getById(@PathVariable UUID id){
		log.info("Inside getById method in Controller Layer");
		return userService.fetchUserById(id);
	}
	
	@GetMapping(params = "email")
	public UserDto getByEmail(@RequestParam String email) {
		log.info("Inside getByEmail method in Controller Layer");
		return userService.fetchUserByEmail(email);
	}
	
	@PostMapping
	public UserDto createUser(@Valid  @RequestBody UserDto userDto){
		log.info("Inside createUser method in Controller Layer");
		return userService.createUser(userDto);
	}
	
	@PatchMapping(ID)
	public UserDto updatePassword(@PathVariable UUID id, @Valid @RequestBody UserDto userDto){
		log.info("Inside updatePassword method in Controller Layer");
		return userService.updateUser(id,userDto);
	}
}
