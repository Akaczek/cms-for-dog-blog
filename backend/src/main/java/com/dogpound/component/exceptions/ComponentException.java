package com.dogpound.component.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class ComponentException extends BadRequestException {
    public ComponentException(ComponentExceptionType type) { super(getMessage(type)); }

    private static String getMessage(ComponentExceptionType type) {
        return switch (type) {
            case INVALID_TYPE -> "ERRORS.COMPONENT.400.INVALID_TYPE";
            case PAGE_ID_IS_NULL -> "ERRORS.COMPONENT.400.PAGE_ID_IS_NULL";
            case ORDER_IS_NULL -> "ERRORS.COMPONENT.400.ORDER_IS_NULL";
            case INVALID_BODY -> "ERRORS.COMPONENT.400.INVALID_BODY";
        };
    }
}
