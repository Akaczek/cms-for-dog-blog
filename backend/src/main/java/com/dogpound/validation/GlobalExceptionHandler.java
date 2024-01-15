package com.dogpound.validation;

import com.dogpound.validation.exceptions.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.ConstraintViolationException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.InvalidPropertyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    private final HttpServletRequest request;
    private final HttpServletResponse response;

    @ExceptionHandler(BadRequestException.class)
    ResponseEntity<RestErrorBody> handleBadRequestException(BadRequestException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.BAD_REQUEST, ex);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorBody);
    }

    @ExceptionHandler(UnauthorizedException.class)
    ResponseEntity<RestErrorBody> handleUnauthorizedException(UnauthorizedException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.UNAUTHORIZED, ex);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorBody);
    }

    @ExceptionHandler(ForbiddenException.class)
    ResponseEntity<RestErrorBody> handleForbiddenException(ForbiddenException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.FORBIDDEN, ex);
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorBody);
    }

    @ExceptionHandler(NotFoundException.class)
    ResponseEntity<RestErrorBody> handleNotFoundException(NotFoundException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.NOT_FOUND, ex);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorBody);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    ResponseEntity<RestErrorBody> handleConstraintViolationException(ConstraintViolationException ex) {
        RestErrorBody errorBody = createRestError(request, "Entity validation failed", HttpStatus.BAD_REQUEST, ex);

        var violations = ex.getConstraintViolations().stream()
                .map(RestErrorBody.FieldViolation::new)
                .collect(Collectors.toList());

        return ResponseEntity.badRequest().body(errorBody);
    }

    @ExceptionHandler(SessionExpiredException.class)
    public ResponseEntity<RestErrorBody> handleHttpSessionExpiredException(SessionExpiredException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.UNAUTHORIZED, ex);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorBody);
    }

    @ExceptionHandler(IOException.class)
    public ResponseEntity<RestErrorBody> handleIOException(RestIOException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorBody);
    }

    @ExceptionHandler(InvalidPropertyException.class)
    public ResponseEntity<RestErrorBody> handleInvalidPropertyException(InvalidPropertyException ex) {
        RestErrorBody errorBody = createRestError(request, ex.getMessage(), HttpStatus.BAD_REQUEST, ex);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorBody);
    }

    public static RestErrorBody createRestError(HttpServletRequest request, String message, HttpStatus status,
                                                RuntimeException exception) {
        RestErrorBody errorBody = new RestErrorBody(message);

        errorBody.setStatus(String.valueOf(status.value()));
        errorBody.setError(status.getReasonPhrase());
        errorBody.setUrl(request.getRequestURL().toString());
        errorBody.setMethod(request.getMethod());
        errorBody.setException(exception.getClass().getSimpleName());
        errorBody.setFieldViolations(List.of());

        return errorBody;
    }
}
