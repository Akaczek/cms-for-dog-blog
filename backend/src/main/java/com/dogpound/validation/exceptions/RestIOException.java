package com.dogpound.validation.exceptions;

public class RestIOException extends RuntimeException {
    public RestIOException() { super("ERRORS.500"); }
    public RestIOException(String message) {
        super(message);
    }
}
