package com.dogpound.image.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class ImageException extends BadRequestException {
    public ImageException(ImageExceptionType type) { super(getMessage(type)); }

    private static String getMessage(ImageExceptionType type) {
        return switch (type) {
            case INVALID_PATH -> "ERRORS.IMAGE.400.INVALID_PATH";
            case URL_OR_FILE -> "ERRORS.IMAGE.400.URL_OR_FILE";
        };
    }
}
