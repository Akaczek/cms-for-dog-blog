package com.dogpound.dog.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class DogException extends BadRequestException {
    public DogException(DogExceptionType type) { super(getMessage(type)); }

    private static String getMessage(DogExceptionType type) {
        return switch (type) {
            case NAME_TAKEN -> "ERRORS.DOG.400.NAME_TAKEN";
            case URL_OR_FILE -> "ERRORS.DOG.400.URL_OR_FILE";
        };
    }
}
