package com.dogpound.auth.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class LoggedUserNotFound extends NotFoundException {
    public LoggedUserNotFound() { super("ERRORS.AUTH.404.LOGGED_USER_NOT_FOUND"); }
}
