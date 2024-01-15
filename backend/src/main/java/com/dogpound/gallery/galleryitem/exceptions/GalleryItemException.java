package com.dogpound.gallery.galleryitem.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class GalleryItemException extends BadRequestException {
    public GalleryItemException(GalleryItemExceptionType type) { super(getMessage(type)); }

    private static String getMessage(GalleryItemExceptionType type) {
        return switch (type) {
            case URL_OR_FILE -> "ERRORS.GALLERY_ITEM.400.URL_OR_FILE";
        };
    }
}
