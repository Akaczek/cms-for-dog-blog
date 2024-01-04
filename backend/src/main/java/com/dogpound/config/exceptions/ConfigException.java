package com.dogpound.config.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class ConfigException extends BadRequestException {
    public ConfigException(ConfigExceptionType type) { super(getMessage(type)); }

    private static String getMessage(ConfigExceptionType type) {
        return switch (type) {
            case KEY_TAKEN -> "ERRORS.CONFIG.400.KEY_TAKEN";
            default -> "ERRORS.CONFIG.400";
        };
    }
}
