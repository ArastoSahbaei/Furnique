package com.modon.customisation.entity;
import com.modon.customisation.model.UserModel;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "USER_ID", updatable = false, nullable = false)
    private Long userId;

    @Column(name = "TIME_OF_REGISTRATION", updatable = false, nullable = false)
    @CreationTimestamp
    private LocalDateTime timeOfRegistration;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<UserOrder> orders;

    @Column(name = "FIRST_NAME", length = 50, nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME", length = 50, nullable = false)
    private String lastName;

    @Column(name = "EMAIL", length = 50, nullable = false)
    private String email;

    @Transient
    @Column(name = "PASSWORD", length = 100, nullable = false)
    private String password;

    @Column(name = "ADDRESS", length = 60, nullable = false)
    private String address;

    @Column(name = "CITY", length = 25, nullable = false)
    private String city;

    @Column(name = "POSTAL_CODE", length = 15, nullable = false)
    private Integer postalCode;

    @Column(name = "COUNTRY", length = 50, nullable = false)
    private String country;

    @Column(name = "PHONE", length = 30)
    private String phone;

    @Column(name = "DELETED")
    private Boolean isDeleted;

    public User() { }

    public User(UserModel userModel){
        this.userId = userModel.getUserId();
        this.timeOfRegistration = userModel.getTimeOfRegistration();
        this.firstName = userModel.getFirstName();
        this.lastName = userModel.getLastName();
        this.email = userModel.getEmail();
        this.password = userModel.getPassword();
        this.address = userModel.getAddress();
        this.city = userModel.getCity();
        this.postalCode = userModel.getPostalCode();
        this.country = userModel.getCountry();
        this.phone = userModel.getPhone();
        this.isDeleted = userModel.isDeleted();
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<UserOrder> getOrders() {
        return orders;
    }

    public void setOrders(List<UserOrder> orders) {
        this.orders = orders;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(Integer postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public LocalDateTime getTimeOfRegistration() { return timeOfRegistration; }

}