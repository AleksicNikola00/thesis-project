package com.ftn.thesisProject.products.service;

import com.ftn.thesisProject.products.persistance.model.ProductSpecific;

import java.util.List;

public interface ProductSpecificService {
    public List<ProductSpecific> getAll();
    public void save(ProductSpecific productSpecific);
    public void deleteAll();
}
