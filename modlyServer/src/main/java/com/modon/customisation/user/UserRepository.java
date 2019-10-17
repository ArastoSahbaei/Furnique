package com.modon.customisation.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    //UserModel registerNewUser(UserModel userModel);
    //User findByUsername(String username);
}
