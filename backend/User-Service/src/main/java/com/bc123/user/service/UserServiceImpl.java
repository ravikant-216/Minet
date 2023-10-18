package com.bc123.user.service;

import com.bc123.user.dto.UserDto;
import com.bc123.user.entity.User;
import com.bc123.user.exception.UserException;
import com.bc123.user.repository.UserRepository;
import com.bc123.user.utils.Converter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.UUID;

import static com.bc123.user.utils.Constants.NOT_FOUND;

@Slf4j
@Service
public class UserServiceImpl implements UserService{
	
	private UserRepository userRepository;
	
	private Converter converter;
	
	@Autowired
	public UserServiceImpl(UserRepository userRepository, Converter converter) {
		this.userRepository = userRepository;
		this.converter = converter;
	}
	
	@Override
	public UserDto fetchUserByEmail(String email) {
		log.info("Inside fetchUserByEmail method in Service Layer");
		try {
			return converter.entityToDto(userRepository.findByEmail(email));
		}catch (Exception e){
			throw new UserException(e.getMessage());
		}
	}
	
	@Override
	public UserDto fetchUserById(UUID id) {
		log.info("Inside fetchUserById method in Service Layer");
		return converter.entityToDto(userRepository.findById(id).orElseThrow(() -> new UserException(id + NOT_FOUND)));
	}
	
	@Override
	public UserDto createUser(UserDto userDto) {
		log.info("Inside createUser method in Service Layer");
		try {
			Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(userDto.getEmail()));
			if (userOptional.isPresent()) {
				throw new UserException("Email is already exists!");
			}
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
			User user = converter.dtoToEntity(userDto);
			User savedUser = userRepository.save(user);
			return converter.entityToDto(savedUser);
		} catch(Exception e) {
			throw new UserException("Error creating user");
		}
	}
	
	
	@Override
	public UserDto updateUser(UUID id,UserDto userDto) {
		log.info("Inside updateUser method in Service Layer");
		Optional<User> optionalUser = userRepository.findById(id);
		if (optionalUser.isPresent()) {
			User user = optionalUser.get();
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String hashedNewPassword = passwordEncoder.encode(userDto.getPassword());
			if (!passwordEncoder.matches(userDto.getPassword(), user.getPassword())) {
				user.setPassword(hashedNewPassword);
				userRepository.save(user);
				return converter.entityToDto(user);
			}else{
				throw new UserException("Please change the new Password");
			}
		}
		throw new UserException(id + NOT_FOUND);
	}
}
