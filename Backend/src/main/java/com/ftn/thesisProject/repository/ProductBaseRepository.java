package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.BrandMap;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.HashMap;
import java.util.List;

public interface ProductBaseRepository extends JpaRepository<ProductBase, Long> {

    @Query("SELECT distinct p.brand,count(p.id) FROM ProductBase p where p.productType=?1 group by p.brand")
    List<BrandMap> findBrandMap(ProductType productType);
    ProductBase findProductBaseByModel(String model);
    ProductBase findProductBaseByModelAndBrand(String model, String brand);
    List<ProductBase> findAllByProductType(ProductType productType);
    List<ProductBase> findAllByProductType(ProductType productType, Pageable pageable);
    List<ProductBase> findAllByProductTypeAndBrandIn(ProductType productType,List<String> brands, Pageable pageable);
}
