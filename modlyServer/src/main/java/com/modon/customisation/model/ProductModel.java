package com.modon.customisation.model;

import com.modon.customisation.entity.Product;

import java.io.Serializable;

public class ProductModel implements Serializable {

    private Integer productId;
    private String productName;
    private String productDescription;
    private Integer width;
    private Integer height;
    private Integer depth;
    private String color;

    public ProductModel() {}

    public ProductModel(Product product) {
        this.productId = product.getProductId();
        this.productName = product.getProductName();
        this.productDescription = product.getProductDescription();
        this.width = product.getWidth();
        this.height = product.getHeight();
        this.depth = product.getDepth();
        this.color = product.getColor();
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() { return productName; }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getDepth() {
        return depth;
    }

    public void setDepth(Integer depth) {
        this.depth = depth;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
