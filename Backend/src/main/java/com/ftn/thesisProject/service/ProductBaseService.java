package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductBaseService {
    public ProductBase getById(Long id);
    public void save(ProductBase productBase);
    public void deleteAll();
    public List<ProductBase> findByType(ProductType clothes, int pageNum, int i);
    public ProductBase find(String model, String brand);

    public List<ProductBase> findFiltered(ProductType clothes, int pageNum, int elementsPerPage, String[] filterParams);
}
