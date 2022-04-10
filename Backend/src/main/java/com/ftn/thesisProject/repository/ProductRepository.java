package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    public List<Product> findAllByProductType(ProductType type);
}
