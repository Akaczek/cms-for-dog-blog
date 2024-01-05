package com.dogpound.user.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class UserException extends BadRequestException {
    public UserException(UserExceptionType type) { super(getMessage(type)); }

    private static String getMessage(UserExceptionType type) {
        return switch (type) {
            case EMAIL_TAKEN -> "ERRORS.USER.400.EMAIL_TAKEN";
            case SAME_PASSWORD -> "ERRORS.USER.400.SAME_PASSWORD";
            case WRONG_PASSWORD -> "ERRORS.USER.400.WRONG_PASSWORD";
            default -> "ERRORS.USER.400";
        };
    }
}
