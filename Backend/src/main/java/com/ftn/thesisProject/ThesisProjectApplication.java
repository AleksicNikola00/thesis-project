package com.ftn.thesisProject;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ftn.thesisProject.model.Product;
import com.ftn.thesisProject.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class ThesisProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThesisProjectApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService){
		return args -> {
				//read json and write to db
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
		};
	}
}
