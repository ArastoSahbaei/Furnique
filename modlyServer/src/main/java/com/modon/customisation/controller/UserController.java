package com.modon.customisation.controller;

import com.modon.customisation.model.UserModel;
import com.modon.customisation.entity.User;
import com.modon.customisation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService = new UserService();

    @CrossOrigin
    @PostMapping
    public ResponseEntity<UserModel> registerNewUser(@RequestBody UserModel userModel){
        UserModel newUser = userService.saveUser(userModel);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<UserModel>> findAllUsers(){
        List<UserModel> resultList = userService.getAllUsers();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/finduser")
    public ResponseEntity<UserModel> findUserById(@RequestParam Long id){
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }

    @DeleteMapping
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
