package com.ftn.thesisProject.service;

import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.enumerations.ProductType;
import com.ftn.thesisProject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    private ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getAllByType(ProductType type) {
        return productRepository.findAllByProductType(type);
    }

    @Override
    public Product getById(Long id) {
        return productRepository.getById(id);
    }

    @Override
    public void saveAll(List<Product> products) {
        productRepository.saveAll(products);
    }
}
