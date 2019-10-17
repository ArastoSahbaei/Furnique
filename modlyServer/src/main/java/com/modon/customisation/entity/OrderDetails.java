package com.modon.customisation.entity;

import javax.persistence.*;
import java.util.Currency;

@Entity
@Table(name = "ORDER_DETAILS")
public class OrderDetails {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    @Column(name = "ORDER_DETAILS_ID", updatable = false, nullable = false)
    private Integer orderDetailsId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ORDER__ID")
    private UserOrder userOrder;

    @Column(name = "PRICE", length = 15, nullable = false)
    private Currency price;

    @Column(name = "QUANTITY", length = 15, nullable = false)
    private Integer quantity;

    @Column(name = "DISCOUNT", length = 15, nullable = false)
    private Integer discount;

    @Column(name = "TOTAL", length = 15, nullable = false)
    private Currency total;

    @Column(name = "WIDTH", length = 15, nullable = false)
    private Integer width;

    @Column(name = "HEIGHT", length = 15, nullable = false)
    private Integer height;

    @Column(name = "DEPTH", length = 15, nullable = false)
    private Integer depth;

    @Column(name = "COLOR", length = 65, nullable = false)
    private String color;

    public OrderDetails() {
    }

    public Integer getOrderDetailsId() {
        return orderDetailsId;
    }

    public void setOrderDetailsId(Integer orderDetailsId) {
        this.orderDetailsId = orderDetailsId;
    }

    public UserOrder getUserOrder() {
        return userOrder;
    }

    public void setUserOrder(UserOrder userOrder) {
        this.userOrder = userOrder;
    }

    public Currency getPrice() {
        return price;
    }

    public void setPrice(Currency price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getDiscount() {
        return discount;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public Currency getTotal() {
        return total;
    }

    public void setTotal(Currency total) {
        this.total = total;
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

