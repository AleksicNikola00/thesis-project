package com.ftn.thesisProject.repository;

import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductBaseRepository extends JpaRepository<ProductBase, Long> {
<<<<<<< Updated upstream
    public ProductBase findProductBaseByModel(String model);
    public ProductBase findProductBaseByModelAndBrand(String model, String brand);
    public List<ProductBase> findAllByProductType(ProductType productType);
    public List<ProductBase> findAllByProductType(ProductType productType, Pageable pageable);
    public List<ProductBase> findAllByProductTypeAndBrandIn(ProductType productType,List<String> brands, Pageable pageable);
=======

    @Query("SELECT distinct p.brand as brand,count(p.id) as count FROM ProductBase p where p.productType=?1 group by p.brand")
    List<BrandMap> findBrandMap(ProductType productType);
    ProductBase findProductBaseByModelAndBrand(String model, String brand);
    List<ProductBase> findAllByProductType(ProductType productType, Pageable pageable);
    List<ProductBase> findAllByProductTypeAndBrandIn(ProductType productType,List<String> brands, Pageable pageable);
>>>>>>> Stashed changes
}
