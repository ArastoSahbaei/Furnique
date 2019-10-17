package com.modon.customisation.user;

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

    public void deleteUser() {
        userRepository.deleteAll();
    }

    private List<UserModel> convertToModelList(List<User>planesList){
        List<UserModel> planesModelList = new ArrayList<>();
        for(User user : planesList){
            planesModelList.add(new UserModel(user));
        }
        return planesModelList;
    }

}
