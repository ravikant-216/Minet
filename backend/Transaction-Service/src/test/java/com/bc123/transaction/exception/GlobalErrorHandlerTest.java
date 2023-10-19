package com.bc123.transaction.exception;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.bc123.transaction.payload.ErrorResponse;

class GlobalErrorHandlerTest {

    private GlobalErrorHandler globalExceptionHandler;

    @BeforeEach
    void setUp() {
        globalExceptionHandler = new GlobalErrorHandler();
    }

    @Test
    void testHandleEntityNotFound() {
        String message = "An unknown error occurred";
        EntityNotFound notFound = new EntityNotFound(message);
        // Act
        ResponseEntity<ErrorResponse> responseEntity = globalExceptionHandler.handleEntityNotFound(notFound);

        // Verify
        Assertions.assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        Assertions.assertEquals(message + " Entity not found", responseEntity.getBody().getMessage());

    }

    @Test
    void testHandleThrowable() {
        String message = "An unknown error occurred";
        Exception notFound = new Exception(message);
        // Act
        ResponseEntity<ErrorResponse> responseEntity = globalExceptionHandler.handleThrowable(notFound);

        // Verify
        Assertions.assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        Assertions.assertEquals(message, responseEntity.getBody().getMessage());
    }
}
