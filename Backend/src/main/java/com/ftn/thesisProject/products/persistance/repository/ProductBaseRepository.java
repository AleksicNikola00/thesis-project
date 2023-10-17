package com.ftn.thesisProject.products.persistance.repository;

import com.ftn.thesisProject.products.persistance.model.BrandMap;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductBaseRepository extends JpaRepository<ProductBase, Long> {

    @Query("SELECT distinct p.brand as brand,count(p.id) as count FROM ProductBase p where p.productType=?1 group by p.brand")
    List<BrandMap> findBrandMap(ProductType productType);
    ProductBase findProductBaseByModelAndBrand(String model, String brand);
    Page<ProductBase> findAllByProductType(ProductType productType, Pageable pageable);
    Page<ProductBase> findAllByProductTypeAndBrandIn(ProductType productType, List<String> brands, Pageable pageable);
    @Query("select p from ProductBase p where lower(concat(p.brand,' ',p.model)) like lower(concat('%',?1,'%'))")
    List<ProductBase> searchByCriteria(String criteria, Pageable pageable);
    Long countByProductType(ProductType productType);
}
