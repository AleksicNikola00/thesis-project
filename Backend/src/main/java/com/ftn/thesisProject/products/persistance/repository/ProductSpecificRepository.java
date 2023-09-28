package com.ftn.thesisProject.products.persistance.repository;

import com.ftn.thesisProject.products.persistance.model.ProductSpecific;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductSpecificRepository extends JpaRepository<ProductSpecific, Long> {
}
