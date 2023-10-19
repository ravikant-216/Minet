package com.bc123.apigateway.exception;

public class UnauthorizedAccessException extends RuntimeException{

    public UnauthorizedAccessException(String message){
        super(message);
    }
}