package com.bc123.transaction.exception;

public class EntityNotFound extends RuntimeException {
  public EntityNotFound(String entity) {
    super(entity + " Entity not found");
  }
}
