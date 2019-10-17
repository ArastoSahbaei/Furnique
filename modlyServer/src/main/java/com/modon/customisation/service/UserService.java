package com.modon.customisation.service;

import com.modon.customisation.entity.User;
import com.modon.customisation.model.UserModel;
import com.modon.customisation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel registerNewUser(UserModel userModel) {
        User newUser = new User(userModel);
        return new UserModel(userRepository.save(newUser));
    }

    public List<UserModel> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return convertToModelList(userList);
    }

    public UserModel findUserByID(Long id) {
        User user = userRepository.getOne(id);
        return new UserModel(user);
    }

    public void deleteAllUser() {
        userRepository.deleteAll();
    }

    private List<UserModel> convertToModelList(List<User> userList){
        List<UserModel> userModelList = new ArrayList<>();
        for(User user : userList){
            userModelList.add(new UserModel(user));
        }
        return userModelList;
    }

}
