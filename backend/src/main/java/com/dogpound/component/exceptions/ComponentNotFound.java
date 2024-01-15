package com.dogpound.component.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class ComponentNotFound extends NotFoundException {
    public ComponentNotFound() { super("ERRORS.COMPONENT.404"); }
}
