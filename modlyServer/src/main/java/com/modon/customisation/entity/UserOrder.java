package com.modon.customisation.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "USER_ORDER")
public class UserOrder {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    @Column(name = "USER_ORDER_ID", updatable = false, nullable = false)
    private Integer orderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER__ID")
    private User user;

    @OneToOne(mappedBy = "userOrder")
    private OrderDetails orderDetails;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userOrder")
    private List<Product> products;

    @Column(name = "ORDER_DATE", nullable = false)
    private Date orderDate;

    @Column(name = "SHIP_DATE", nullable = false)
    private Date shipDate;

    @Column(name = "DELETED")
    private Boolean isDeleted;

    public UserOrder() {
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

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }
}
