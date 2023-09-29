package com.ftn.thesisProject.products.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductSpecificsDTO {
    private Long id;
    private double price;
    private String link;
}
