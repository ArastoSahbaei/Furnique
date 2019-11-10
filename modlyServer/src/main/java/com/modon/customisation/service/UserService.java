package com.modon.customisation.service;

import com.modon.customisation.entity.ConfirmationToken;
import com.modon.customisation.entity.User;
import com.modon.customisation.exception.UserAlreadyExistException;
import com.modon.customisation.repository.ConfirmationTokenRepository;
import com.modon.customisation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserServiceInterface {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Override
    public User registerNewUserAccount(final User user) {
        if (emailExists(user.getEmail())) { throw new UserAlreadyExistException("There is an account with that email adress: " + user.getEmail()); }
        return userRepository.save(user);
    }

    private boolean emailExists(final String email) { return userRepository.findByEmail(email) != null; }

    public User saveUser(User user) { return userRepository.save(user); }

    public User getUserByConfirmationToken(String confirmationToken) {
        return confirmationTokenRepository.findByConfirmationToken(confirmationToken).getUser();
    }

    public List<User> getAllUsers() { return userRepository.findAll(); }

    public User findUserById(Long id) { return userRepository.getOne(id); }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    public Integer amountOfUsersInDB() { return userRepository.findAllActiveUsers(); }

    public List getEmailFromConfirmedUsers() { return userRepository.getEmailFromConfirmedUsers(); }
}
