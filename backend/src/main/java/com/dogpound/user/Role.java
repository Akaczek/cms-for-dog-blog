package com.dogpound.user;

import com.dogpound.user.exceptions.InvalidRoleException;

public enum Role {
    SUPERADMIN,
    ADMIN,
    USER;

    @Override
    public String toString() {
        switch (this) {
            case USER -> { return "user"; }
            case ADMIN -> { return "admin"; }
            case SUPERADMIN -> { return "superadmin"; }
            default -> { throw new InvalidRoleException(); }
        }
    }

    public static Role toEnum(String role) {
        switch (role) {
            case "user" -> { return USER; }
            case "admin" -> { return ADMIN; }
            case "superadmin" -> { return SUPERADMIN; }
            default -> { throw new InvalidRoleException(); }
        }
    }
}
