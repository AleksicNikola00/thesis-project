package com.ftn.thesisProject.model;

import javax.persistence.*;

@Entity
public class ProductSpecific {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double price;
    private String link;
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private ProductBase productBase;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
