package com.dogpound.gallery.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class GalleryNotFound extends NotFoundException {
    public GalleryNotFound() { super("ERRORS.GALLERY.404"); }
}
