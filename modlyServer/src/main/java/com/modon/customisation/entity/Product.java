package com.modon.customisation.entity;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCT")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    @Column(name = "PRODUCT_ID", updatable = false, nullable = false)
    private Integer productId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ORDER__ID")
    private UserOrder userOrder;

    @Column(name = "PRODUCT_NAME", length = 100, nullable = false)
    private String productName;

    @Column(name = "PRODUCT_DESCRIPTION", length = 255, nullable = false)
    private String productDescription;

    @Column(name = "WIDTH", length = 15, nullable = false)
    private Integer width;

    @Column(name = "HEIGHT", length = 15, nullable = false)
    private Integer height;

    @Column(name = "DEPTH", length = 15, nullable = false)
    private Integer depth;

    @Column(name = "COLOR", length = 65, nullable = false)
    private String color;

    public Product() {
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public UserOrder getUserOrder() {
        return userOrder;
    }

    public void setUserOrder(UserOrder userOrder) {
        this.userOrder = userOrder;
    }

    public String getProductName() {
        return productName;
    }

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
