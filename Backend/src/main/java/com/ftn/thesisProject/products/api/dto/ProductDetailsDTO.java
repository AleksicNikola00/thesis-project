package com.ftn.thesisProject.products.api.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailsDTO {
    private Long id;
    private String brand;
    private String model;
    @JsonProperty("product_type")
    private ProductType productType;
    @JsonProperty("img_src")
    private String imgSrc;
    private List<ProductSpecificsDTO> productSpecifics;
}
