package com.dogpound.image.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class InvalidImagePath extends BadRequestException {
    public InvalidImagePath() { super("ERRORS.IMAGE.400.INVALID_PATH"); }
}
