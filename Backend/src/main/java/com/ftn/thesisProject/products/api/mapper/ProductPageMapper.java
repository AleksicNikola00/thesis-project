package com.ftn.thesisProject.products.api.mapper;

import com.ftn.thesisProject.products.api.dto.ProductPageDTO;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;


@Mapper(uses = ProductMapper.class)
public interface ProductPageMapper {
    ProductPageMapper INSTANCE = Mappers.getMapper(ProductPageMapper.class);
    ProductPageDTO toProductPageDTO(Page<ProductBase> productPage);
}
