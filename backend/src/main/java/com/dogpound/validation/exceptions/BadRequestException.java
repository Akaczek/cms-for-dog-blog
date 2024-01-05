package com.dogpound.validation.exceptions;

public class BadRequestException extends RuntimeException {
    public BadRequestException() { super("ERRORS.400"); }
    public BadRequestException(String message) {
        super(message);
    }
}
