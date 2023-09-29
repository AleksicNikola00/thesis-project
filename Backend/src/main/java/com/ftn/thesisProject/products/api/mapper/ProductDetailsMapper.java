package com.ftn.thesisProject.products.api.mapper;

import com.ftn.thesisProject.products.api.dto.ProductDetailsDTO;
import com.ftn.thesisProject.products.api.dto.ProductSpecificsDTO;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.persistance.model.ProductSpecific;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface ProductDetailsMapper {
    ProductDetailsMapper INSTANCE = Mappers.getMapper(ProductDetailsMapper.class);

    ProductDetailsDTO toProductDetailsDTO(ProductBase productBase);

    ProductSpecificsDTO toProductSpecificsDTO(ProductSpecific productSpecific);

    default List<ProductSpecificsDTO> toProductSpecificsDTO(List<ProductSpecific> productSpecifics){
        return productSpecifics.stream().map(this::toProductSpecificsDTO).collect(Collectors.toList());
    }
}
