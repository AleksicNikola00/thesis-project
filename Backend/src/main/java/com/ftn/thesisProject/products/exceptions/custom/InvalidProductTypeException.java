package com.ftn.thesisProject.products.exceptions.custom;


public class InvalidProductTypeException extends RuntimeException {
    public InvalidProductTypeException(String message) {
        super(message);
    }
}
