package com.ftn.thesisProject.service;


import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import com.ftn.thesisProject.repository.ProductBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
        return productBaseRepository.findById(id).get();
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
    public ProductBase findByModel(String model) {
        return productBaseRepository.findProductBaseByModel(model);
    }

    @Override
    public ProductBase findByModelAndBrand(String model, String brand){
        return  productBaseRepository.findProductBaseByModelAndBrand(model,brand);
    }

    @Override
    public List<ProductBase> findAllByType(ProductType type) {
        return  productBaseRepository.findAllByProductType(type);
    }


    @Override
    public List<ProductBase> findAllByType(ProductType type, int pageNum, int elementNum) {
        return productBaseRepository.findAllByProductType(type,PageRequest.of(pageNum,elementNum));
    }


}
