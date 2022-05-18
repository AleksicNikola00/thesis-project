package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductBaseRepository extends JpaRepository<ProductBase, Long> {
    public ProductBase findProductBaseByModel(String model);
    public ProductBase findProductBaseByModelAndBrand(String model, String brand);
    public List<ProductBase> findAllByProductType(ProductType productType);
    public List<ProductBase> findAllByProductType(ProductType productType, Pageable pageable);
}
