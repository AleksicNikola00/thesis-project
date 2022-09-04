package com.ftn.thesisProject.service.implementations;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.model.ProductBase;
import com.ftn.thesisProject.service.ProductBaseService;
import com.ftn.thesisProject.service.ProductSpecificService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class UpdateDatabaseService {

    private ProductBaseService productBaseService;
    private ProductSpecificService productSpecificService;
    private Logger logger = LoggerFactory.getLogger(UpdateDatabaseService.class);

    @Autowired
    public UpdateDatabaseService(ProductBaseService productBaseService, ProductSpecificService productSpecificService) {
        this.productBaseService = productBaseService;
        this.productSpecificService = productSpecificService;
    }

    // cron = second, minute, hour, day of month, month, day(s) of week
    // once a day
    @Scheduled(cron = "0 0 0 * * *")
    public void updateDatabase() {
        productSpecificService.deleteAll();
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
                for(Product product : products)
                    saveProduct(product);

                logger.info("Products successfully saved!");
            }
        }
        catch (IOException e){
            logger.error("Error while saving: " + e.getMessage());
        }
    }

    // once a week
    @Scheduled(cron = "0 0 0 * * 0")
    public void restartDatabase(){
        productBaseService.deleteAll();
        updateDatabase();
    }

    private void saveProduct(Product product){
        ProductBase productBase = productBaseService.find(product.getProductBase().getModel(),product.getProductBase().getBrand());
        if(productBase != null)
            product.setProductBase(productBase);

        productBaseService.save(product.getProductBase());
        product.getProductSpecific().setProductBase(product.getProductBase());
        productSpecificService.save(product.getProductSpecific());
    }

}
