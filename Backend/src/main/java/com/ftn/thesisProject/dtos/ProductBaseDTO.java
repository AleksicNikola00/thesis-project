package com.ftn.thesisProject.dtos;

import com.ftn.thesisProject.model.enumerations.ProductType;

public class ProductBaseDTO {

    private String brand;
    private String model;
    private ProductType type;
    private String imgUrl;
    private Long id;

    public ProductBaseDTO(String brand, String model, ProductType type, String imgUrl, Long id) {
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.imgUrl = imgUrl;
        this.id = id;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
