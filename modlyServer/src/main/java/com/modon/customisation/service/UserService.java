package com.modon.customisation.service;

import com.modon.customisation.entity.User;
import com.modon.customisation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User findUserById(Long id) {
        return userRepository.getOne(id);

    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    public Integer amountOfUsersInDB() {
        return userRepository.findAllActiveUsers();
    }
}
