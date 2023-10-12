package com.ftn.thesisProject.products.api.v1;

import com.ftn.thesisProject.products.api.dto.ProductBaseDTO;
import com.ftn.thesisProject.products.api.dto.ProductDetailsDTO;
import com.ftn.thesisProject.products.api.mapper.ProductDetailsMapper;
import com.ftn.thesisProject.products.api.mapper.ProductMapper;
import com.ftn.thesisProject.products.exceptions.custom.InvalidProductTypeException;
import com.ftn.thesisProject.products.persistance.model.BrandMap;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.persistance.model.enumerations.ProductType;
import com.ftn.thesisProject.products.service.ProductBaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
public class ProductController {

    private final ProductBaseService productBaseService;



    @GetMapping("/{id}")
    public ResponseEntity<ProductDetailsDTO> getProduct(@PathVariable Long id){
        var product = productBaseService.getById(id);
        var retVal = ProductDetailsMapper.INSTANCE.toProductDetailsDTO(product);
        return ResponseEntity.ok(retVal);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProductBaseDTO>> search(@RequestParam int pageNum,@RequestParam int pageSize ,@RequestParam String criteria){
        var products = productBaseService.search(criteria,pageNum, pageSize);
        var retProducts = ProductMapper.INSTANCE.toProductBaseDTOs(products);
        return new ResponseEntity<>(retProducts, HttpStatus.OK);
    }


    @GetMapping("/brands")
    public ResponseEntity<List<BrandMap>> getBrandMap(@RequestParam String productType){
        List<BrandMap> brandMap = new ArrayList<>();

        if(productType.equalsIgnoreCase(ProductType.CLOTHES.name()))
            brandMap = productBaseService.getFilterMap(ProductType.CLOTHES);
        else if(productType.equalsIgnoreCase(ProductType.SHOES.name()))
            brandMap = productBaseService.getFilterMap(ProductType.SHOES);

        return ResponseEntity.ok(brandMap);
    }


    @GetMapping()
    public ResponseEntity<List<ProductBaseDTO>> getProductsPageable(
            @RequestParam int pageNum,
            @RequestParam int pageSize,
            @RequestParam String productType,
            @RequestParam(required = false) String[] brands
    ) {
        List<ProductBaseDTO> retProducts = new ArrayList<>();
        List<ProductBase> products = new ArrayList<>();

        if (productType.equalsIgnoreCase(ProductType.CLOTHES.name())) {
            products = productBaseService.findFiltered(ProductType.CLOTHES, pageNum, pageSize, brands);
        } else if (productType.equalsIgnoreCase(ProductType.SHOES.name())) {
            products = productBaseService.findFiltered(ProductType.SHOES, pageNum, pageSize, brands);
        } else {
            throw new InvalidProductTypeException("Provided product type doesn't exist!");
        }

        retProducts = ProductMapper.INSTANCE.toProductBaseDTOs(products);
        return ResponseEntity.ok(retProducts);
    }




}
