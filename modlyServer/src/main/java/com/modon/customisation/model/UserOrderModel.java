package com.modon.customisation.model;

import com.modon.customisation.entity.OrderDetails;
import com.modon.customisation.entity.Product;
import com.modon.customisation.entity.User;
import com.modon.customisation.entity.UserOrder;

import java.util.Date;
import java.util.List;

public class UserOrderModel {

    private Integer orderId;
    private User user;
    private OrderDetails orderDetails;
    private List<Product> products;
    private Date orderDate;
    private Date shipDate;
    private Boolean isDeleted;

    public UserOrderModel() {
    }

    public UserOrderModel(UserOrder userOrder) {
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OrderDetails getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(OrderDetails orderDetails) {
        this.orderDetails = orderDetails;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getShipDate() {
        return shipDate;
    }

    public void setShipDate(Date shipDate) {
        this.shipDate = shipDate;
    }

    public Boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }
}
