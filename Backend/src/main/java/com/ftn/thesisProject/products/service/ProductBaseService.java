package com.ftn.thesisProject.products.service;

import com.ftn.thesisProject.products.persistance.model.BrandMap;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductBaseService {
    ProductBase getById(Long id);
    void save(ProductBase productBase);
    void deleteAll();
    ProductBase find(String model, String brand);
    Page<ProductBase> findFiltered(ProductType clothes, int pageNum, int elementsPerPage, String[] brands);
    List<BrandMap> getFilterMap(ProductType type);
    Page<ProductBase> search(String criteria, int pageNum, int elementsPerPage);
    Long getCountByProductType(ProductType type);
}
