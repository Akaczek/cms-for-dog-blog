package com.dogpound.user.exceptions;

import com.dogpound.validation.exceptions.ForbiddenException;

public class UserForbidden extends ForbiddenException {
    public UserForbidden() { super("ERRORS.USER.403"); }
}
