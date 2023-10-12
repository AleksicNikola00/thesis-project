package com.ftn.thesisProject.shared.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class SharedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @Override
    @NonNull
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        StringBuilder builder = new StringBuilder();
        for (FieldError error : ex.getBindingResult().getFieldErrors())
            builder.append(error.getDefaultMessage());

        for (ObjectError error : ex.getBindingResult().getGlobalErrors())
            builder.append(error.getDefaultMessage());

        ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST,
                builder.toString());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(message);
    }
}
