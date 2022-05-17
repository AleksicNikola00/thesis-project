package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;

import java.util.List;

public interface ProductBaseService {
    public List<ProductBase> getAll();
    public ProductBase getById(Long id);
    public void save(ProductBase productBase);
    public void saveAll(List<ProductBase> productBases);
    public void deleteAll();
    public ProductBase findByModel(String model);
    public List<ProductBase> findAllByType(ProductType type);
}
