package com.bc123.user.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HandleException {

	@ExceptionHandler(value = UserException.class)
	public ResponseEntity<Object> hanldeUserNotFoundException(UserException userException){
		ExceptionResponse exceptionResponse = new ExceptionResponse(userException.getMessage(), HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = RuntimeException.class)
	public ResponseEntity<Object> hanldeException(RuntimeException runtimeException){
		ExceptionResponse exceptionResponse = new ExceptionResponse(runtimeException.getMessage(), HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
	}
}
