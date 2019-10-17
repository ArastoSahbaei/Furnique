package com.modon.customisation.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/login")
public class UserController {

    @Autowired
    private UserService userService = new UserService();

    @CrossOrigin
    @PostMapping("/planes")
    public ResponseEntity<UserModel> registerNewUser(@RequestBody UserModel userModel){
        System.out.println("hej");
        UserModel newUser = userService.registerNewUser(userModel);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/hehe")
    public ResponseEntity<List<UserModel>> getAllPlanes(){
        List<UserModel> resultList = userService.getAllUsers();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteUser(@RequestBody UserModel userModel) {
        userService.deleteUser();
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
