package com.ftn.thesisProject.products.persistance.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
   private ProductBase productBase;
   private ProductSpecific productSpecific;
}
