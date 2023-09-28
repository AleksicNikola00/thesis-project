package com.ftn.thesisProject.products.api.v1;

import com.ftn.thesisProject.products.api.dto.ProductBaseDTO;
import com.ftn.thesisProject.products.persistance.model.BrandMap;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import com.ftn.thesisProject.products.service.ProductBaseService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

    private final ProductBaseService productBaseService;

    @Value("${custom.pagination-size}")
    private int ELEMENTS_PER_PAGE;

    public ProductController(ProductBaseService productBaseService) {
        this.productBaseService = productBaseService;
    }

    @GetMapping("/test")
    public ResponseEntity<String> healthCheck(){
        String retval = "Application is working and is returning " + ELEMENTS_PER_PAGE + " elements per page";
        return ResponseEntity.ok(retval);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductBase> getProduct(@PathVariable Long id){
        return new ResponseEntity<>(productBaseService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/search/{pageNum}")
    public ResponseEntity<List<ProductBaseDTO>> search(@PathVariable int pageNum,@RequestParam String criteria){
        var products = productBaseService.search(criteria,pageNum,ELEMENTS_PER_PAGE);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }

    @GetMapping("/clothes/brands")
    public ResponseEntity<List<BrandMap>> getClothesFilterMap(){
        return new ResponseEntity<>(productBaseService.getFilterMap(ProductType.CLOTHES),HttpStatus.OK);
    }

    @GetMapping("/shoes/brands")
    public ResponseEntity<List<BrandMap>> getShoesFilterMap(){
        return new ResponseEntity<>(productBaseService.getFilterMap(ProductType.SHOES),HttpStatus.OK);
    }

    @GetMapping("/clothes/{pageNum}")
    public ResponseEntity<List<ProductBaseDTO>> getClothesPageable(@PathVariable int pageNum,@RequestParam(required = false) String[] filterParams){
        var products = productBaseService.findFiltered(ProductType.CLOTHES,pageNum, ELEMENTS_PER_PAGE, filterParams);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }

    @GetMapping("/shoes/{pageNum}")
    public ResponseEntity<List<ProductBaseDTO>> getShoesPageable(@PathVariable int pageNum,@RequestParam(required = false) String[] filterParams){
        var products = productBaseService.findFiltered(ProductType.SHOES,pageNum, ELEMENTS_PER_PAGE,filterParams);
        var retProducts = new ArrayList<ProductBaseDTO>();
        for(ProductBase productBase : products)
            retProducts.add(new ProductBaseDTO(productBase.getBrand(),productBase.getModel(),productBase.getProductType(),productBase.getImgSrc(), productBase.getId()));

        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }

}
