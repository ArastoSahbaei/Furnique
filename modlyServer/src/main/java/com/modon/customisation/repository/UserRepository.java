package com.modon.customisation.repository;

import com.modon.customisation.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select COUNT(*) from user", nativeQuery = true)
    Integer findAllActiveUsers();
}
