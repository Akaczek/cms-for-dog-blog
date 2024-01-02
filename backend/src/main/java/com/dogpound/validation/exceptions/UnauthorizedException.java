package com.dogpound.validation.exceptions;

public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException() { super("ERRORS.401"); }
    public UnauthorizedException(String message) { super(message); }
}
