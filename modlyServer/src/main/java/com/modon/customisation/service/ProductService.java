package com.modon.customisation.service;

import com.modon.customisation.entity.Product;
import com.modon.customisation.entity.UserOrder;
import com.modon.customisation.repository.ProductRepository;
import com.modon.customisation.repository.UserOrderRepository;
import com.modon.customisation.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserOrderRepository userOrderRepository;

    public Product registerNewProduct(Product product, Long userOrderId) throws NotFoundException {
        return userOrderRepository.findById(userOrderId).map(userOrder -> {
            product.setUserOrder(userOrder);
            return productRepository.save(product);
        }).orElseThrow(() -> new NotFoundException("User order not found"));
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
