package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.ProductSpecific;

import java.util.List;

public interface ProductSpecificService {
    public List<ProductSpecific> getAll();
    public ProductSpecific getById(Long id);
    public void save(ProductSpecific productSpecific);
    public void saveAll(List<ProductSpecific> productSpecifics);
    public void deleteAll();
}
