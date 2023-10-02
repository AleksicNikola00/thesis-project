package com.ftn.thesisProject.products.service.implementations;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ftn.thesisProject.products.persistance.model.Product;
import com.ftn.thesisProject.products.persistance.model.ProductBase;
import com.ftn.thesisProject.products.service.ProductBaseService;
import com.ftn.thesisProject.products.service.ProductSpecificService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class UpdateDatabaseService {

    private final ProductBaseService productBaseService;
    private final ProductSpecificService productSpecificService;


    // cron = second, minute, hour, day of month, month, day(s) of week
    // once a day
    @Scheduled(cron = "0 0 0 * * *")
    public void updateDatabase() {
        productSpecificService.deleteAll();
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Product>> typeReference = new TypeReference<>() {
        };
        String JSON_PATH = "/jsons";
        String JSON_NAME = "json-list.txt";
        InputStream inputStream = TypeReference.class.getResourceAsStream(JSON_PATH + "/" + JSON_NAME);

        BufferedReader reader = new BufferedReader(new InputStreamReader(Objects.requireNonNull(inputStream)));

        try {
            log.info("Started saving products!");
            while(reader.ready()) {
                String path = reader.readLine();
                InputStream inpStream = TypeReference.class.getResourceAsStream(JSON_PATH + "/" + path);
                List<Product> products = mapper.readValue(inpStream,typeReference);
                for(Product product : products)
                    saveProduct(product);

                log.info("Products from path " + path + " successfully saved!");
            }
            log.info("Products successfully saved!");
        }
        catch (IOException e){
            log.error("Error while saving: " + e.getMessage());
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
