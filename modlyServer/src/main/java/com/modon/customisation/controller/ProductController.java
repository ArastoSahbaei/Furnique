package com.modon.customisation.controller;

import com.modon.customisation.entity.Product;
import com.modon.customisation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService = new ProductService();

    @CrossOrigin
    @PostMapping
    public ResponseEntity<Product> registerNewProduct(@RequestBody Product productModel) {
        Product newProduct = productService.registerNewProduct(productModel);
        return new ResponseEntity<>(newProduct, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Product>> findAllProducts(){
        List<Product> resultList = productService.getAllProducts();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }



}
