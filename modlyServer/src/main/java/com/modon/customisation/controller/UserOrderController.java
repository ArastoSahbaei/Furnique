package com.modon.customisation.controller;

import com.modon.customisation.model.UserOrderModel;
import com.modon.customisation.service.UserOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userorders")
public class UserOrderController {

    @Autowired
    private UserOrderService userOrderService;

    @CrossOrigin
    @PostMapping
    public ResponseEntity<UserOrderModel> saveUserOrder(@RequestBody UserOrderModel userOrderModel) {
        UserOrderModel newUser = userOrderService.saveUserOrder(userOrderModel);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<UserOrderModel>> findAllUserOrders(){
        List<UserOrderModel> resultList = userOrderService.getAllUserOrders();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/finduserorder")
    public ResponseEntity<UserOrderModel> findUserById(@RequestParam Long id){
        return new ResponseEntity<>(userOrderService.findUserOrderById(id), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteUser(@RequestParam Long id) {
        userOrderService.deleteUserOrderById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
