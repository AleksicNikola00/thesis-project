package com.ftn.thesisProject.controller;

import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.enumerations.ProductType;
import com.ftn.thesisProject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAll(){
        List<Product> products = productService.getAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping(path = "/clothes")
    public ResponseEntity<List<Product>> getAllClothes(){
        List<Product> products = productService.getAllByType(ProductType.CLOTHES);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping(path = "/shoes")
    public ResponseEntity<List<Product>> getAllShoes(){
        List<Product> products = productService.getAllByType(ProductType.SHOES);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Product> getById(@PathVariable Long id){
        Product product = productService.getById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
