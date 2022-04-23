package com.ftn.thesisProject.service;


import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.repository.ProductBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<ProductBase> getAll() {
        return productBaseRepository.findAll();
    }

    @Override
    public ProductBase getById(Long id) {
        return productBaseRepository.getById(id);
    }

    @Override
    public void save(ProductBase productBase) {
        productBaseRepository.save(productBase);
    }

    @Override
    public void saveAll(List<ProductBase> productBases) {
        productBaseRepository.saveAll(productBases);
    }
}
