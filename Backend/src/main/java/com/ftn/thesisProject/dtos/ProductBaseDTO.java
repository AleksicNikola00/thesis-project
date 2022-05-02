package com.ftn.thesisProject.dtos;

import com.ftn.thesisProject.model.enumerations.ProductType;

public class ProductBaseDTO {

    private String brand;
    private String model;
    private ProductType type;
    private String imgUrl;

    public ProductBaseDTO(String brand, String model, ProductType productType, String imgUrl) {
        this.brand = brand;
        this.model = model;
        this.type = productType;
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


    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
