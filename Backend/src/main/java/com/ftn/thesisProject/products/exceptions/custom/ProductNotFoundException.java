package com.ftn.thesisProject.products.exceptions.custom;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(String message) {
        super(message);
    }
}
