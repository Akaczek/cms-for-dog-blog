package com.dogpound.auth.exceptions;

import com.dogpound.validation.exceptions.UnauthorizedException;

public class BadCredentialsException extends UnauthorizedException {
    public BadCredentialsException() { super("ERRORS.LOGIN.401.WRONG_CREDENTIALS"); }
}
