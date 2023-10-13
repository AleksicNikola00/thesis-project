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

    @GetMapping()
    public ResponseEntity<List<ProductBaseDTO>> getProductsPageable(
            @RequestParam int pageNum,
            @RequestParam int pageSize,
            @RequestParam String productType,
            @RequestParam(required = false) String[] brands
    ) {
        var type = getProductType(productType);
        var products = productBaseService.findFiltered(type,pageNum,pageSize, brands);

        var retProducts = ProductMapper.INSTANCE.toProductBaseDTOs(products);
        return ResponseEntity.ok(retProducts);
    }

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
    public ResponseEntity<List<BrandMap>> getBrandMap(@RequestParam String productType) throws InterruptedException {
        var type = getProductType(productType);
        var brandMap = productBaseService.getFilterMap(type);
        return ResponseEntity.ok(brandMap);
    }


    @GetMapping("/count")
    public ResponseEntity<Long> getCountByProductType(@RequestParam String productType){
        var type = getProductType(productType);
        Long count = productBaseService.getCountByProductType(type);
        return ResponseEntity.ok(count);
    }

    private ProductType getProductType(String productType){
        if(productType.equalsIgnoreCase(ProductType.CLOTHES.name())) return ProductType.CLOTHES;
        if(productType.equalsIgnoreCase(ProductType.SHOES.name())) return ProductType.SHOES;

        throw new InvalidProductTypeException("Provided product type doesn't exist!");
    }


}
