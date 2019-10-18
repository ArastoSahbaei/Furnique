package com.modon.customisation.controller;

import com.modon.customisation.model.ProductModel;
import com.modon.customisation.model.UserModel;
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
    public ResponseEntity<ProductModel> registerNewProduct(@RequestBody ProductModel productModel) {
        ProductModel newProduct = productService.registerNewProduct(productModel);
        return new ResponseEntity<>(newProduct, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<ProductModel>> findAllProducts(){
        List<ProductModel> resultList = productService.getAllProducts();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }



}
