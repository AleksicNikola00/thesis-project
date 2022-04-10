package com.ftn.thesisProject.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ftn.thesisProject.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
public class UpdateDatabaseService {

    private ProductService productService;

    @Autowired
    public UpdateDatabaseService(ProductService productService) {
        this.productService = productService;
    }

    @Scheduled(cron = "0 53 19 * * *")
    public void UpdateDatabase(){
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Product>> typeReference = new TypeReference<List<Product>>(){};
        InputStream inputStream = TypeReference.class.getResourceAsStream("/jsons/men-clothes-fashion-and-friends.json");
        try{
            List<Product> products = mapper.readValue(inputStream,typeReference);
            productService.saveAll(products);
            System.out.println("Products successfully saved!");
        }
        catch (IOException e){
            System.out.println("Error while saving: " + e.getMessage());
        }
    }

}
