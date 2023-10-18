package com.bc123.user.exception;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExceptionResponse {
	private String message;
	private HttpStatus httpStatus;
}
