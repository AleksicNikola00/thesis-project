package com.ftn.thesisProject.products.service.implementations;


import com.ftn.thesisProject.products.exceptions.custom.ProductNotFoundException;
import com.ftn.thesisProject.products.persistance.model.BrandMap;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import com.ftn.thesisProject.products.persistance.repository.ProductBaseRepository;
import com.ftn.thesisProject.products.service.ProductBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;


@Service
public class ProductBaseServiceImpl implements ProductBaseService {

    private ProductBaseRepository productBaseRepository;

    @Autowired
    public ProductBaseServiceImpl(ProductBaseRepository productBaseRepository) {
        this.productBaseRepository = productBaseRepository;
    }


    @Override
    public ProductBase getById(Long id) {
        return productBaseRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(String.format("Product with id '%d' not found",id )));
    }

    @Override
    public void save(ProductBase productBase) {
        productBaseRepository.save(productBase);
    }

    @Override
    public void deleteAll() {
        productBaseRepository.deleteAll();
    }


    @Override
    public ProductBase find(String model, String brand){
        return  productBaseRepository.findProductBaseByModelAndBrand(model,brand);
    }

    @Override
    public List<ProductBase> findFiltered(ProductType type, int pageNum, int elementNum, String[] brands) {
        if(brands!=null && brands.length!= 0)
            return productBaseRepository.findAllByProductTypeAndBrandIn(type, Arrays.asList(brands),PageRequest.of(pageNum,elementNum));
        else
            return productBaseRepository.findAllByProductType(type,PageRequest.of(pageNum,elementNum));
    }

    @Override
    public List<BrandMap> getFilterMap(ProductType type) {
        return productBaseRepository.findBrandMap(type);
    }

    @Override
    public List<ProductBase> search(String criteria,int pageNum,int elementNum) {
        return productBaseRepository.searchByCriteria(criteria,PageRequest.of(pageNum,elementNum));
    }

    @Override
    public Long getCountByProductType(ProductType type) {
        return productBaseRepository.countByProductType(type);
    }


}
