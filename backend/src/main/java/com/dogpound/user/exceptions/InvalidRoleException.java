package com.dogpound.user.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class InvalidRoleException extends BadRequestException {
    public InvalidRoleException() { super("ERRORS.ROLE.400"); }
    public InvalidRoleException(String message) { super(message); }
}
