package com.ftn.thesisProject.products.api.dto;

import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductBaseDTO {
    private String brand;
    private String model;
    private ProductType type;
    private String imgUrl;
    private Long id;
}
