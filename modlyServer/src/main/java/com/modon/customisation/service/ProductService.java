package com.modon.customisation.service;

import com.modon.customisation.entity.Product;
import com.modon.customisation.entity.User;
import com.modon.customisation.model.ProductModel;
import com.modon.customisation.model.UserModel;
import com.modon.customisation.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductModel registerNewProduct(ProductModel productModel) {
        Product product = new Product(productModel);
        return new ProductModel(productRepository.save(product));
    }

    public List<ProductModel> getAllProducts() {
        List<Product> productList = productRepository.findAll();
        return convertToModelList(productList );
    }

    private List<ProductModel> convertToModelList(List<Product> productList){
        List<ProductModel> productModelList = new ArrayList<>();
        for(Product product: productList){
            productModelList.add(new ProductModel(product));
        }
        return productModelList;
    }
}
