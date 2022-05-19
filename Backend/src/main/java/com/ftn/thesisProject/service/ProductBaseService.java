package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.BrandMap;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;

import java.util.HashMap;
import java.util.List;

public interface ProductBaseService {
    ProductBase getById(Long id);
    void save(ProductBase productBase);
    void deleteAll();
    ProductBase find(String model, String brand);
    List<ProductBase> findFiltered(ProductType clothes, int pageNum, int elementsPerPage, String[] filterParams);
    List<BrandMap> getFilterMap(ProductType type);
}
