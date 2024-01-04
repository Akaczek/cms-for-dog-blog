package com.dogpound.message.exceptions;

import com.dogpound.validation.exceptions.BadRequestException;

public class MessageException extends BadRequestException {
    public MessageException() { super("ERRORS.MESSAGES.400"); }
}
