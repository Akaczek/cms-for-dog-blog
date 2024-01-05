package com.dogpound.message.exceptions;

import com.dogpound.validation.exceptions.NotFoundException;

public class MessageNotFound extends NotFoundException {
    public MessageNotFound() { super("ERRORS.MESSAGES.404"); }
}
