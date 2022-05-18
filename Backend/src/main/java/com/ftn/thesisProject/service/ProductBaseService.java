package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductBaseService {
    public ProductBase getById(Long id);
    public void save(ProductBase productBase);
    public void deleteAll();
    public ProductBase findByModel(String model);
    public List<ProductBase> findAllByType(ProductType type);
    public List<ProductBase> findAll(int pageNum, int elementNum);
    public List<ProductBase> findAllByType(ProductType clothes, int pageNum, int i);
}
