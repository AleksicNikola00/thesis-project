package com.ftn.thesisProject.service;


import com.ftn.thesisProject.model.BrandMap;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import com.ftn.thesisProject.repository.ProductBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
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
    public ProductBase find(String model, String brand){
        return  productBaseRepository.findProductBaseByModelAndBrand(model,brand);
    }

    @Override
    public List<ProductBase> findFiltered(ProductType type, int pageNum, int elementNum, String[] filterParams) {
        if(filterParams!=null && filterParams.length!= 0)
            return productBaseRepository.findAllByProductTypeAndBrandIn(type, Arrays.asList(filterParams),PageRequest.of(pageNum,elementNum));
        else
            return productBaseRepository.findAllByProductType(type,PageRequest.of(pageNum,elementNum));
    }

    @Override
    public List<BrandMap> getFilterMap(ProductType type) {
        return productBaseRepository.findBrandMap(type);
    }

}
