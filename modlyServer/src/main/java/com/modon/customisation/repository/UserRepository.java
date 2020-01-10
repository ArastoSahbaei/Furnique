package com.modon.customisation.repository;

import com.modon.customisation.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select COUNT(*) from user", nativeQuery = true)
    Integer findAllActiveUsers();

    User findByEmail(String email);

    @Query(value = "select email from user where is_enabled = true;", nativeQuery = true)
    List getEmailFromConfirmedUsers();

    User findByUsername(String userName);
}
