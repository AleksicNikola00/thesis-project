package com.ftn.thesisProject.products.persistance.model;



public class Product {
   private ProductBase productBase;
   private ProductSpecific productSpecific;

    public ProductBase getProductBase() {
        return productBase;
    }

    public void setProductBase(ProductBase productBase) {
        this.productBase = productBase;
    }

    public ProductSpecific getProductSpecific() {
        return productSpecific;
    }

    public void setProductSpecific(ProductSpecific productSpecific) {
        this.productSpecific = productSpecific;
    }
}
