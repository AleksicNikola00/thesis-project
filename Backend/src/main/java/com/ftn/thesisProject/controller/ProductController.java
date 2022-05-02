package com.ftn.thesisProject.controller;

import com.ftn.thesisProject.dtos.ProductBaseDTO;
import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.enumerations.ProductType;
import com.ftn.thesisProject.service.ProductBaseService;
import com.ftn.thesisProject.service.ProductSpecificService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<List<ProductBaseDTO>> getProducts(){
        var products = productBaseService.getAll();
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductBase> getProduct(@PathVariable Long id){
        return new ResponseEntity<>(productBaseService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/clothes")
    public ResponseEntity<List<ProductBaseDTO>> getClothes(){
        var products = productBaseService.findAllByType(ProductType.CLOTHES);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts,HttpStatus.OK);
    }

    @GetMapping("/shoes")
    public ResponseEntity<List<ProductBaseDTO>> getShoes(){
        var products = productBaseService.findAllByType(ProductType.SHOES);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts,HttpStatus.OK);
    }

}
