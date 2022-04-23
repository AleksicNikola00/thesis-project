package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.ProductBase;

import java.util.List;

public interface ProductBaseService {
    public List<ProductBase> getAll();
    public ProductBase getById(Long id);
    public void save(ProductBase productBase);
    public void saveAll(List<ProductBase> productBases);
}
