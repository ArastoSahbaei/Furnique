package com.modon.customisation.service;

import com.modon.customisation.entity.User;
import com.modon.customisation.model.UserModel;
import com.modon.customisation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel saveUser(UserModel userModel) {
        User newUser = new User(userModel);
        return new UserModel(userRepository.save(newUser));
    }

    public List<UserModel> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return convertToModel(userList);
    }

    public UserModel findUserById(Long id) {
        User user = userRepository.getOne(id);
        return new UserModel(user);
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    public Integer amountOfUsersInDB() {
        return userRepository.findAllActiveUsers();
    }

    private List<UserModel> convertToModel(List<User> userList){
        return userList.stream().map(UserModel::new).collect(Collectors.toList());
    }
}
