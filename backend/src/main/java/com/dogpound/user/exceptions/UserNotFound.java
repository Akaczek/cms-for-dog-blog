package com.dogpound.user.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class UserNotFound extends NotFoundException {
    public UserNotFound() { super("ERRORS.USER.404"); }
}
