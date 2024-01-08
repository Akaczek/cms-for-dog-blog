package com.dogpound.user.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class RoleException extends BadRequestException {
    public RoleException(RoleExceptionType type) { super(getMessage(type)); }

    private static String getMessage(RoleExceptionType type) {
        return switch (type) {
            case INVALID_ROLE -> "ERRORS.ROLE.400.INVALID_ROLE";
            case CANNOT_SET_SUPERADMIN -> "ERRORS.ROLE.401.CANNOT_SET_SUPERADMIN";
            case CANNOT_MODIFY_SUPERADMIN -> "ERRORS.ROLE.401.CANNOT_MODIFY_SUPERADMIN";
        };
    }
}
