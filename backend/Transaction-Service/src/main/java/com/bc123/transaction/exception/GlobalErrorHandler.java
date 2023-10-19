package com.bc123.transaction.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.bc123.transaction.payload.ErrorResponse;

@ControllerAdvice
public class GlobalErrorHandler {
    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ErrorResponse> handleThrowable(Exception ex) {
        ErrorResponse response = ErrorResponse.builder()
                .message(ex.getMessage())
                .success(false)
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .build();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler(EntityNotFound.class)
    public ResponseEntity<ErrorResponse> handleEntityNotFound(EntityNotFound ex) {
        ErrorResponse response = ErrorResponse.builder()
                .message(ex.getMessage())
                .success(false)
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
}
