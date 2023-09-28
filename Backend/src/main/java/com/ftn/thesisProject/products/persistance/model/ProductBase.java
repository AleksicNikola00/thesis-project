package com.ftn.thesisProject.products.persistance.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;

import javax.persistence.*;
import java.util.List;

@Entity
public class ProductBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    @JsonProperty("product_type")
    private ProductType productType;
    @JsonProperty("img_src")
    private String imgSrc;
    @OneToMany(mappedBy = "productBase", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<ProductSpecific> productSpecifics;

    public ProductBase() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
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

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public List<ProductSpecific> getProductSpecifics() {
        return productSpecifics;
    }

    public void setProductSpecifics(List<ProductSpecific> productSpecifics) {
        this.productSpecifics = productSpecifics;
    }
}
