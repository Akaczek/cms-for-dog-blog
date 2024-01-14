package com.dogpound.component.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class ComponentException extends BadRequestException {
    public ComponentException(ComponentExceptionType type) { super(getMessage(type)); }

    private static String getMessage(ComponentExceptionType type) {
        return switch (type) {
            case INVALID_TYPE -> "ERRORS.COMPONENT.400.INVALID_TYPE";
            case DOG_ID_IS_NULL -> "ERRORS.COMPONENT.400.DOG_ID_IS_NULL";
            case LINKS_IS_NULL -> "ERRORS.COMPONENT.400.LINKS_IS_NULL";
            case GALLERY_IS_NULL -> "ERRORS.COMPONENT.400.GALLERY_IS_NULL";
            case INVALID_BODY -> "ERRORS.COMPONENT.400.INVALID_BODY";
        };
    }
}
