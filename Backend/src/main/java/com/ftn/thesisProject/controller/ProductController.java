package com.ftn.thesisProject.controller;

import com.ftn.thesisProject.dtos.ProductBaseDTO;
import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.model.constants.Constants;
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


    @GetMapping("/{id}")
    public ResponseEntity<ProductBase> getProduct(@PathVariable Long id){
        return new ResponseEntity<>(productBaseService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/clothes/{pageNum}")
    public ResponseEntity<List<ProductBaseDTO>> getClothesPageable(@PathVariable int pageNum,@RequestParam(required = false) String[] filterParams){
        var products = productBaseService.findFiltered(ProductType.CLOTHES,pageNum, Constants.ELEMENTS_PER_PAGE,filterParams);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }

    @GetMapping("/shoes/{pageNum}")
    public ResponseEntity<List<ProductBaseDTO>> getShoesPageable(@PathVariable int pageNum,@RequestParam(required = false) String[] filterParams){
        var products = productBaseService.findFiltered(ProductType.SHOES,pageNum, Constants.ELEMENTS_PER_PAGE,filterParams);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }

}
