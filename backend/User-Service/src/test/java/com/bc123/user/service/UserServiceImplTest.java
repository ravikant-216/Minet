package com.bc123.user.service;

import com.bc123.user.dto.UserDto;
import com.bc123.user.entity.User;
import com.bc123.user.exception.UserException;
import com.bc123.user.repository.UserRepository;
import com.bc123.user.utils.Converter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceImplTest {
	
	@Mock
	private UserRepository userRepository;
	
	@Mock
	private Converter converter;
	
	@Mock
	private PasswordEncoder passwordEncoder;
	
	@InjectMocks
	private UserServiceImpl userService;
	
	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testFetchUserByEmail_ReturnsUserDto() {
		String email = "test@example.com";
		User user = new User();
		UserDto userDto = new UserDto();
		
		when(userRepository.findByEmail(email)).thenReturn(user);
		when(converter.entityToDto(user)).thenReturn(userDto);
		
		UserDto result = userService.fetchUserByEmail(email);
		
		assertNotNull(result);
		assertEquals(userDto, result);
	}
	@Test
	void testFetchUserByEmail_ExceptionThrown() {
		String email = "test@example.com";
		
		when(userRepository.findByEmail(email)).thenThrow(new RuntimeException("Simulated exception"));
		
		assertThrows(UserException.class, () -> userService.fetchUserByEmail(email), "Simulated exception");
	}
	
	
	@Test
	void testFetchUserById_ReturnsUserDto() {
		UUID userId = UUID.randomUUID();
		User user = new User();
		UserDto userDto = new UserDto();
		
		when(userRepository.findById(userId)).thenReturn(Optional.of(user));
		when(converter.entityToDto(user)).thenReturn(userDto);
		
		UserDto result = userService.fetchUserById(userId);
		
		assertNotNull(result);
		assertEquals(userDto, result);
	}
	
	@Test
	void testFetchUserById_UserNotFound() {
		UUID userId = UUID.randomUUID();
		
		when(userRepository.findById(userId)).thenReturn(Optional.empty());
		
		assertThrows(UserException.class, () -> userService.fetchUserById(userId));
	}
	
	@Test
	void testCreateUser_ReturnsCreatedUserDto() {
		UserDto userDto = new UserDto(UUID.randomUUID(),"majahar","majahar@gmail.com","Test@123");
		User user = new User(UUID.randomUUID(),"majahar","majahar@gmail.com","Test@123");
		String encodedPassword = "encodedPassword";
		
		when(userRepository.findByEmail(userDto.getEmail())).thenReturn(null);
		when(converter.dtoToEntity(userDto)).thenReturn(user);
		when(userRepository.save(user)).thenReturn(user);
		when(converter.entityToDto(user)).thenReturn(userDto);
		
		UserDto result = userService.createUser(userDto);
		
		assertNotNull(result);
		assertEquals(userDto, result);
	}
	
	@Test
	void testCreateUser_EmailAlreadyExists() {
		UserDto userDto = new UserDto();
		
		when(userRepository.findByEmail(userDto.getEmail())).thenReturn(new User());
		
		assertThrows(UserException.class, () -> userService.createUser(userDto));
	}
	
	@Test
	void testCreateUser_Encryption() {
		UserDto userDto = new UserDto(UUID.randomUUID(),"majahar","majahar@gmail.com","Test@123");
		User user = new User(UUID.randomUUID(),"majahar","majahar@gmail.com","Test@123");
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String originalPassword = userDto.getPassword();
		String encodedPassword = passwordEncoder.encode(originalPassword);
		
		when(userRepository.findByEmail(userDto.getEmail())).thenReturn(null);
		when(converter.dtoToEntity(userDto)).thenReturn(user);
		when(userRepository.save(user)).thenReturn(user);
		when(converter.entityToDto(user)).thenReturn(userDto);
		
		UserDto result = userService.createUser(userDto);
		
		assertNotNull(result);
		assertEquals(userDto, result);
		assertNotEquals(originalPassword, result.getPassword());
		assertTrue(passwordEncoder.matches(originalPassword, result.getPassword()));
	}
	
	@Test
	void testCreateUser_ExceptionThrown() {
		UserDto userDto = new UserDto();
		
		when(userRepository.findByEmail(userDto.getEmail())).thenReturn(null);
		when(converter.dtoToEntity(userDto)).thenReturn(new User());
		when(userRepository.save(any(User.class))).thenThrow(new RuntimeException());
		
		assertThrows(UserException.class, () -> userService.createUser(userDto));
	}
	
	@Test
	void testUpdateUser_UserNotFound() {
		UUID userId = UUID.randomUUID();
		UserDto userDto = new UserDto();
		
		when(userRepository.findById(userId)).thenReturn(Optional.empty());
		
		assertThrows(UserException.class, () -> userService.updateUser(userId, userDto));
	}
	
	@Test
	void testUpdateUser_PasswordChanged() {
		UUID userId = UUID.randomUUID();
		UserDto userDto = new UserDto(userId, "majahar", "majahar@gmail.com", "NewPassword");
		User user = new User(userId, "majahar", "majahar@gmail.com", "OldPassword");
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedNewPassword = passwordEncoder.encode(userDto.getPassword());
		when(userRepository.findById(userId)).thenReturn(Optional.of(user));
		when(userRepository.save(any(User.class))).thenReturn(user);
		when(converter.entityToDto(user)).thenReturn(userDto);
		
		UserDto result = userService.updateUser(userId, userDto);
		assertNotNull(result);
		assertNotEquals("OldPassword", result.getPassword());
		assertTrue(passwordEncoder.matches("NewPassword", hashedNewPassword));
		
		verify(userRepository, times(1)).findById(userId);
		verify(userRepository, times(1)).save(any(User.class));
		assertEquals(userDto, result);
	}
	@Test
	void testUpdateUser_SameAsPreviousPassword() {
		UUID userId = UUID.randomUUID();
		UserDto userDto = new UserDto(userId, "majahar", "majahar@gmail.com", "OldPassword");
		User user = new User(userId, "majahar", "majahar@gmail.com", "OldPassword");
		PasswordEncoder passwordEncoderNew = new BCryptPasswordEncoder();
		String hashedNewPassword = passwordEncoderNew.encode(user.getPassword());
		user.setPassword(hashedNewPassword);
		
		when(userRepository.findById(userId)).thenReturn(Optional.of(user));
		when(userRepository.save(any(User.class))).thenReturn(user);
		when(converter.entityToDto(user)).thenReturn(userDto);
		when(passwordEncoder.matches(userDto.getPassword(), user.getPassword())).thenReturn(false);
		
		
		assertThrows(UserException.class, () -> userService.updateUser(userId, userDto));
	}
}
