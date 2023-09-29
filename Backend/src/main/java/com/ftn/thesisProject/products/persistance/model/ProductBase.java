package com.ftn.thesisProject.products.persistance.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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

}
