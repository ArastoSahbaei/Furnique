package com.modon.customisation.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "USER_ORDER")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class UserOrder {

    @Id
    @GeneratedValue(generator = "userOrder_sequence", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "userOrder_sequence", sequenceName = "user_order_id_sq")
    @Column(name = "USER_ORDER_ID", updatable = false, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER__ID", nullable = false)
    private User user;

    @OneToOne(mappedBy = "userOrder")
    private OrderDetails orderDetails;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userOrder")
    @JsonIgnore
    private List<Product> products;

    @CreationTimestamp
    @Column(name = "ORDER_DATE", nullable = true)
    private LocalDateTime orderDate;

    @CreationTimestamp
    @Column(name = "SHIP_DATE", nullable = true)
    private LocalDateTime shipDate;

    @Column(name = "DELETED")
    private Boolean isDeleted;

    public UserOrder() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public LocalDateTime getShipDate() {
        return shipDate;
    }

    public void setShipDate(LocalDateTime shipDate) {
        this.shipDate = shipDate;
    }

    public Boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }
}
