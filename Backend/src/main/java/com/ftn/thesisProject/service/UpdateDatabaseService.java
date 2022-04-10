package com.ftn.thesisProject.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ftn.thesisProject.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class UpdateDatabaseService {

    final private ProductService productService;

    @Autowired
    public UpdateDatabaseService(ProductService productService) {
        this.productService = productService;
    }

    @Scheduled(cron = "0 37 1 * * *")
    public void UpdateDatabase() {
        productService.deleteAll();
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Product>> typeReference = new TypeReference<>() {
        };
        InputStream inputStream = TypeReference.class.getResourceAsStream("/jsons/json-list.txt");

        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

        try {
            while(reader.ready()) {
                String path = reader.readLine();
                InputStream inpStream = TypeReference.class.getResourceAsStream("/jsons/" + path);
                List<Product> products = mapper.readValue(inpStream,typeReference);
                productService.saveAll(products);
                System.out.println("Products successfully saved!");
            }
        }
        catch (IOException e){
            System.out.println("Error while saving: " + e.getMessage());
        }
    }

}
