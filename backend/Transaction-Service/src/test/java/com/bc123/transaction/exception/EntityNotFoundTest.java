package com.bc123.transaction.exception;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EntityNotFoundTest {
    @Test
    void testEmptyConstructor() {
        // Mock
        String message = "test exception";
        try {
            throw new EntityNotFound(message);
        } catch (EntityNotFound ex) {
            Assertions.assertEquals(message + " Entity not found", ex.getMessage());
        }
    }

}
