package com.ftn.thesisProject.products.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductPageDTO {
    private List<ProductBaseDTO> content;
    private boolean last;
    private int totalPages;
    private int totalElements;
}
