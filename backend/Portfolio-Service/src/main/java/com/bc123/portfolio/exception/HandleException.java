package com.bc123.portfolio.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HandleException {
    @ExceptionHandler(value = WalletException.class)
    public ResponseEntity<Object> handleWalletNotFoundException(WalletException walletException){
        ExceptionResponse exceptionResponse = new ExceptionResponse(walletException.getMessage(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(value = WatchlistException.class)
    public ResponseEntity<Object> handleWatchlistException(WatchlistException watchlistException){
        ExceptionResponse exceptionResponse = new ExceptionResponse(watchlistException.getMessage(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = RuntimeException.class)
    public ResponseEntity<Object> handleException(RuntimeException runtimeException) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(runtimeException.getMessage(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }
}
