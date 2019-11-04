package com.modon.customisation.controller;

import com.modon.customisation.entity.User;
import com.modon.customisation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService = new UserService();

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<User>> findAllUsers(){
        List<User> resultList = userService.getAllUsers();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/finduser")
    public ResponseEntity<User> findUserById(@RequestParam Long id){
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/finduserbytoken")
    public ResponseEntity<User> findUserByConfirmationToken(@RequestParam String id){
        return new ResponseEntity<>(userService.getUserByConfirmationToken(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteUser(@RequestParam Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/count")
    public ResponseEntity amountOfUsers() {
        System.out.println(userService.amountOfUsersInDB());
        return ResponseEntity.ok(userService.amountOfUsersInDB());
    }

}
