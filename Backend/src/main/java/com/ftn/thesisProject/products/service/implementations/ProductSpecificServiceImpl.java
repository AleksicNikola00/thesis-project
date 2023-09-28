package com.ftn.thesisProject.products.service.implementations;

import com.ftn.thesisProject.products.persistance.model.ProductSpecific;
import com.ftn.thesisProject.products.persistance.repository.ProductSpecificRepository;
import com.ftn.thesisProject.products.service.ProductSpecificService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductSpecificServiceImpl implements ProductSpecificService {

    private ProductSpecificRepository productSpecificRepository;

    @Autowired
    public ProductSpecificServiceImpl(ProductSpecificRepository productSpecificRepository) {
        this.productSpecificRepository = productSpecificRepository;
    }

    @Override
    public List<ProductSpecific> getAll() {
        return productSpecificRepository.findAll();
    }

    @Override
    public void save(ProductSpecific productSpecific) {
        productSpecificRepository.save(productSpecific);
    }

    @Override
    public void deleteAll() {
        productSpecificRepository.deleteAll();
    }
}
