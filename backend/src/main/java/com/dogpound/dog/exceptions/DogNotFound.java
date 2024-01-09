package com.dogpound.dog.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class DogNotFound extends NotFoundException {
    public DogNotFound() { super("ERRORS.DOG.404"); }

}
