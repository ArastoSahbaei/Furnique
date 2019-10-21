package com.modon.customisation.entity;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCT")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    @Column(name = "PRODUCT_ID", updatable = false, nullable = false)
    private Integer productId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ORDER__ID")
    private UserOrder userOrder;

    @Column(length = 100, nullable = false)
    private String productName;

    @Column(length = 65, nullable = false)
    private String surfaceMaterial;

    @Column(length = 15, nullable = false)
    private Integer surfaceWidth;

    @Column(length = 15, nullable = false)
    private Integer surfaceHeight;

    @Column(length = 15, nullable = false)
    private Integer surfaceLength;

    @Column(length = 65, nullable = false)
    private String legsMaterial;

    @Column(length = 15, nullable = false)
    private Integer legsWidth;

    @Column(length = 15, nullable = false)
    private Integer legsHeight;

    @Column(length = 15, nullable = false)
    private Integer legsLength;

    public Product() {}

    public String getLegsMaterial() { return legsMaterial; }

    public void setLegsMaterial(String legsMaterial) { this.legsMaterial = legsMaterial; }

    public Integer getLegsWidth() { return legsWidth; }

    public void setLegsWidth(Integer legsWidth) { this.legsWidth = legsWidth; }

    public Integer getLegsHeight() { return legsHeight; }

    public void setLegsHeight(Integer legsHeight) { this.legsHeight = legsHeight; }

    public Integer getLegsLength() { return legsLength; }

    public void setLegsLength(Integer legsLength) { this.legsLength = legsLength; }

    public String getSurfaceMaterial() { return surfaceMaterial; }

    public void setSurfaceMaterial(String surfaceMaterial) { this.surfaceMaterial = surfaceMaterial; }

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

    public Integer getSurfaceWidth() {
        return surfaceWidth;
    }

    public void setSurfaceWidth(Integer surfaceWidth) {
        this.surfaceWidth = surfaceWidth;
    }

    public Integer getSurfaceHeight() {
        return surfaceHeight;
    }

    public void setSurfaceHeight(Integer surfaceHeight) {
        this.surfaceHeight = surfaceHeight;
    }

    public Integer getSurfaceLength() {
        return surfaceLength;
    }

    public void setSurfaceLength(Integer surfaceLength) {
        this.surfaceLength = surfaceLength;
    }
}
