package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.ProductSpecific;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductSpecificRepository extends JpaRepository<ProductSpecific, Long> {
}
