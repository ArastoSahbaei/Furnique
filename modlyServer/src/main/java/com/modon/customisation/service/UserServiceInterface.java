package com.modon.customisation.service;

import com.modon.customisation.entity.User;
import com.modon.customisation.exception.UserAlreadyExistException;

public interface UserServiceInterface {

    User registerNewUserAccount(User user) throws UserAlreadyExistException;

}
