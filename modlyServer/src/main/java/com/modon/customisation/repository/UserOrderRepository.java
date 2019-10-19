package com.modon.customisation.repository;

import com.modon.customisation.entity.UserOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserOrderRepository extends JpaRepository<UserOrder, Long> {
}
