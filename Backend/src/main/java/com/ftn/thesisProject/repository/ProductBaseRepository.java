package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.ProductBase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductBaseRepository extends JpaRepository<ProductBase, Long> {
    public ProductBase findProductBaseByModel(String model);
}
