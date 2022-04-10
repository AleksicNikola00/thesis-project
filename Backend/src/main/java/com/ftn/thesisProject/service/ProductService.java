package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.enumerations.ProductType;

import java.util.List;

public interface ProductService {
     List<Product> getAll();
     List<Product> getAllByType(ProductType type);
     Product getById(Long id);
     void deleteAll();
     void saveAll(List<Product> products);
}
