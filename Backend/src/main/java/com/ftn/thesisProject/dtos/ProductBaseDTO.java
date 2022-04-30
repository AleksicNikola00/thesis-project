package com.ftn.thesisProject.dtos;

import com.ftn.thesisProject.model.enumerations.ProductType;

public class ProductBaseDTO {

    private String brand;
    private String model;
    private ProductType productType;
    private String imgUrl;

    public ProductBaseDTO(String brand, String model, ProductType productType, String imgUrl) {
        this.brand = brand;
        this.model = model;
        this.productType = productType;
        this.imgUrl = imgUrl;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
