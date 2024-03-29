package com.dogpound.validation.exceptions;

public class NotFoundException extends RuntimeException {
    public NotFoundException() { super("ERRORS.404"); }
    public NotFoundException(String message) { super(message); }
}
