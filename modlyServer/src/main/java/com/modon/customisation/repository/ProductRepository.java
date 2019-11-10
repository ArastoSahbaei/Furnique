package com.modon.customisation.repository;

import com.modon.customisation.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByUserOrderId(Long userOrderId);
}
