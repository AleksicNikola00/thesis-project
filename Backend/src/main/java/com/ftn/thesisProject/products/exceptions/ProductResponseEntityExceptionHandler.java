package com.ftn.thesisProject.products.exceptions;


import com.ftn.thesisProject.products.api.v1.AdminController;
import com.ftn.thesisProject.products.api.v1.ProductController;
import com.ftn.thesisProject.products.exceptions.custom.InvalidProductTypeException;
import com.ftn.thesisProject.products.exceptions.custom.ProductNotFoundException;
import com.ftn.thesisProject.shared.exceptions.ErrorMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice(assignableTypes = {ProductController.class, AdminController.class})
public class ProductResponseEntityExceptionHandler {
    @ExceptionHandler(InvalidProductTypeException.class)
    public ResponseEntity<ErrorMessage> InvalidProductTypeExceptionHandler(InvalidProductTypeException invalidAddressException, WebRequest request){
        var errorMessage = ErrorMessage.builder()
                .message(invalidAddressException.getMessage())
                .status(HttpStatus.BAD_REQUEST)
                .build();

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorMessage);
    }

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<ErrorMessage> productNotFoundExceptionHandler(ProductNotFoundException productNotFoundException, WebRequest request){
        var errorMessage = ErrorMessage.builder()
                .message(productNotFoundException.getMessage())
                .status(HttpStatus.NOT_FOUND)
                .build();

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(errorMessage);
    }
}
