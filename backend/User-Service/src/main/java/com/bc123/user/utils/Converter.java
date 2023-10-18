package com.bc123.user.utils;

import com.bc123.user.dto.UserDto;
import com.bc123.user.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converter {
	private final ModelMapper modelMapper;
	
	@Autowired
	public Converter(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}
	
	public UserDto entityToDto(User user){
		return  modelMapper.map(user, UserDto.class);
	}
	
	public User dtoToEntity(UserDto userDto){
		return modelMapper.map(userDto, User.class);
	}
}
