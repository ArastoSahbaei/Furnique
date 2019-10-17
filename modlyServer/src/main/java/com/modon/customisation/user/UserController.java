package com.modon.customisation.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService = new UserService();

    @CrossOrigin
    @PostMapping("/user")
    public ResponseEntity<UserModel> registerNewUser(@RequestBody UserModel userModel){
        UserModel newUser = userService.registerNewUser(userModel);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/user")
    public ResponseEntity<List<UserModel>> getAllPlanes(){
        List<UserModel> resultList = userService.getAllUsers();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/user/{id}")
    public ResponseEntity<UserModel> findUserByID(@PathVariable Long id){
        return new ResponseEntity<>(userService.findUserByID(id), HttpStatus.OK);
    }

    @DeleteMapping("/user")
    public ResponseEntity deleteAllUser() {
        userService.deleteAllUser();
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
