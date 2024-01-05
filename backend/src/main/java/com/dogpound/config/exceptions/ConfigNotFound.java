package com.dogpound.config.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class ConfigNotFound extends NotFoundException {
    public ConfigNotFound() { super("ERRORS.CONFIG.404"); }
}