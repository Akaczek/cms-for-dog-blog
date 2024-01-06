package com.dogpound.auth.exceptions;

import org.springframework.security.authentication.BadCredentialsException;

public class LoginException extends BadCredentialsException {
    public LoginException(LoginExceptionType type) {
        super(getMessage(type));
    }

    private static String getMessage(LoginExceptionType type) {
        return switch (type) {
            case EMAIL_NOT_FOUND -> "ERRORS.LOGIN.401.EMAIL_NOT_FOUND";
            case BAD_CREDENTIALS -> "ERRORS.LOGIN.401.WRONG_CREDENTIALS";
        };
    }
}
