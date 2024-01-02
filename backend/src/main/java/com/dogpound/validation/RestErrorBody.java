package com.dogpound.validation;

import jakarta.validation.ConstraintViolation;
import lombok.Data;
import lombok.Value;

import java.util.List;

@Data
public class RestErrorBody {
    @Value
    static class FieldViolation {
        String field;
        String message;

        FieldViolation(ConstraintViolation<?> violation) {
            field = violation.getPropertyPath().toString();
            message = violation.getMessage();
        }
    }

    private final String message;
    private String error;
    private String status;
    private String url;
    private String method;
    private String exception;
    private List<FieldViolation> fieldViolations;
}
