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

    private ProductBaseService productBaseService;
    private ProductSpecificService productSpecificService;

    @Autowired
    public UpdateDatabaseService(ProductBaseService productBaseService, ProductSpecificService productSpecificService) {
        this.productBaseService = productBaseService;
        this.productSpecificService = productSpecificService;
    }

    @Scheduled(cron = "1 * * * * *")
    public void UpdateDatabase() {
        //productService.deleteAll();
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
                for(Product product : products){
                    productBaseService.save(product.getProductBase());
                    product.getProductSpecific().setProductBase(product.getProductBase());
                    productSpecificService.save(product.getProductSpecific());
                }
                //productService.saveAll(products);
                System.out.println("Products successfully saved!");
            }
        }
        catch (IOException e){
            System.out.println("Error while saving: " + e.getMessage());
        }
    }

}
