package com.dogpound.gallery.galleryitem.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class GalleryItemNotFound extends NotFoundException {
    public GalleryItemNotFound() { super("ERRORS.GALLERY_ITEM.404"); }
}
