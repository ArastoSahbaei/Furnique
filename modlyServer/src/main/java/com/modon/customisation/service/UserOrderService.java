package com.modon.customisation.service;

import com.modon.customisation.entity.UserOrder;
import com.modon.customisation.repository.UserOrderRepository;
import com.modon.customisation.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserOrderService {

    @Autowired
    private UserOrderRepository userOrderRepository;

    @Autowired
    private UserRepository userRepository;

    public UserOrder saveUserOrder(UserOrder userOrder, Long userId) throws NotFoundException {
        return userRepository.findById(userId).map(user -> {
            userOrder.setUser(user);
            userOrderRepository.save(userOrder);
            return userOrderRepository.save(userOrder);
        }).orElseThrow(() -> new NotFoundException("User not found"));
    }

    public List<UserOrder> getAllUserOrders() {
        return userOrderRepository.findAll();
    }

    public List<UserOrder> findUserOrderById(Long userId) {
        return userOrderRepository.findByUserId(userId);
    }

    public void deleteUserOrderById(Long id) {
        userOrderRepository.deleteById(id);
    }
}
