package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductBaseRepository extends JpaRepository<ProductBase, Long> {
    ProductBase findProductBaseByModel(String model);
    ProductBase findProductBaseByModelAndBrand(String model, String brand);
    List<ProductBase> findAllByProductType(ProductType productType);
    List<ProductBase> findAllByProductType(ProductType productType, Pageable pageable);
    List<ProductBase> findAllByProductTypeAndBrandIn(ProductType productType,List<String> brands, Pageable pageable);
}
