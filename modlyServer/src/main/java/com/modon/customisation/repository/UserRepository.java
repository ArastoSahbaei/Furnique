package com.modon.customisation.repository;

import com.modon.customisation.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    //UserModel registerNewUser(UserModel userModel);
    //User findByUsername(String username);
}
