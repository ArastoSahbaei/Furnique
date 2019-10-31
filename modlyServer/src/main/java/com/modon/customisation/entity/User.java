package com.modon.customisation.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "USER")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "USER_ID", updatable = false, nullable = true)
    private Long id;

    @CreationTimestamp
    @Column(name = "TIME_OF_REGISTRATION", updatable = false, nullable = true)
    private LocalDateTime timeOfRegistration;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    @JsonIgnore
    private List<UserOrder> orders;

    @Column(name = "FIRST_NAME", length = 50, nullable = true)
    private String firstName;

    @Column(name = "LAST_NAME", length = 50, nullable = true)
    private String lastName;

    @Column(name = "EMAIL", length = 50, nullable = true, unique = true)
    @Email(message = "Email contains invalid characters")
    private String email;

    @Transient
    @Column(name = "PASSWORD", length = 100, nullable = true)
    private String password;

    @Column(name = "ADDRESS", length = 60, nullable = true)
    private String address;

    @Column(name = "CITY", length = 25, nullable = true)
    private String city;

    @Column(name = "POSTAL_CODE", length = 15, nullable = true)
    private Integer postalCode;

    @Column(name = "COUNTRY", length = 50, nullable = true)
    private String country;

    @Column(name = "PHONE", length = 30)
    private String phone;

    @Column(name = "DELETED")
    private Boolean isDeleted;

    private boolean isEnabled;

    public User() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Boolean getDeleted() { return isDeleted; }

    public boolean isEnabled() { return isEnabled; }

    public void setEnabled(boolean enabled) { isEnabled = enabled; }

    public LocalDateTime getTimeOfRegistration() { return timeOfRegistration; }

}