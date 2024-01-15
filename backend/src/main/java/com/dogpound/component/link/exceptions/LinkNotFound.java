package com.dogpound.component.link.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class LinkNotFound extends NotFoundException {
    public LinkNotFound() { super("ERRORS.LINK.404"); }
}
