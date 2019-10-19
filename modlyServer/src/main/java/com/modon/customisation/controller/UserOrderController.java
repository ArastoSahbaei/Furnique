package com.modon.customisation.controller;

import com.modon.customisation.entity.UserOrder;
import com.modon.customisation.service.UserOrderService;
import javassist.NotFoundException;
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
    public ResponseEntity<UserOrder> saveUserOrder(@RequestParam(value = "id") Long userId, @RequestBody UserOrder userOrder) throws NotFoundException {
        userOrderService.saveUserOrder(userOrder, userId);
        return new ResponseEntity<>(userOrder, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<UserOrder>> findAllUserOrders(){
        List<UserOrder> resultList = userOrderService.getAllUserOrders();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/finduserorder")
    public ResponseEntity<List<UserOrder>> findUserOrderById(@RequestParam(value = "id") Long userId){
        return new ResponseEntity<>(userOrderService.findUserOrderById(userId), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteUserOrder(@RequestParam Long id) {
        userOrderService.deleteUserOrderById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
