package com.dogpound.page.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class PageNotFound extends NotFoundException {
    public PageNotFound() { super("ERRORS.PAGE.404"); }
}
