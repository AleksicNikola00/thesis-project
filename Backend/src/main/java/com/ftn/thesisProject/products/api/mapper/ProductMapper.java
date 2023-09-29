package com.ftn.thesisProject.products.api.mapper;

import com.ftn.thesisProject.products.api.dto.ProductBaseDTO;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(target = "imgUrl", source = "imgSrc")
    @Mapping(target = "type", source = "productType")
    ProductBaseDTO toProductBaseDTO(ProductBase productBase);
    default List<ProductBaseDTO> toProductBaseDTOs(List<ProductBase> productBases){
        return productBases.stream().map(this::toProductBaseDTO).collect(Collectors.toList());
    }
}

