package com.ftn.thesisProject.controller;

import com.ftn.thesisProject.dtos.ProductBaseDTO;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.service.ProductBaseService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

    private ProductBaseService productBaseService;


    public ProductController(ProductBaseService productBaseService) {
        this.productBaseService = productBaseService;
    }

    @GetMapping
    public List<ProductBaseDTO> getProducts(){
        var products = productBaseService.getAll();
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc()));

        return retProducts;
    }

}
