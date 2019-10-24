package com.modon.customisation.service;

import com.modon.customisation.entity.User;
import com.modon.customisation.error.UserAlreadyExistException;

public interface UserServiceInterface {

    User registerNewUserAccount(User user) throws UserAlreadyExistException;

}
