package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.ProductSpecific;

import java.util.List;

public interface ProductSpecificService {
    public List<ProductSpecific> getAll();
    public void save(ProductSpecific productSpecific);
    public void deleteAll();
}
