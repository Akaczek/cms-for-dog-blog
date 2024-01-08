package com.dogpound.image.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class ImageNotFound extends NotFoundException {
    public ImageNotFound() { super("ERRORS.IMAGE.404"); }
}
