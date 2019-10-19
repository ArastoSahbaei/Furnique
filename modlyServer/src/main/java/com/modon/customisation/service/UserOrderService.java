package com.modon.customisation.service;

import com.modon.customisation.entity.UserOrder;
import com.modon.customisation.model.UserOrderModel;
import com.modon.customisation.repository.UserOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserOrderService {

    @Autowired
    private UserOrderRepository userOrderRepository;

    public UserOrderModel saveUserOrder(UserOrderModel userOrderModel) {
        UserOrder order = new UserOrder(userOrderModel);
        return new UserOrderModel(userOrderRepository.save(order));
    }

    public List<UserOrderModel> getAllUserOrders() {
        List<UserOrder> userList = userOrderRepository.findAll();
        return convertToModel(userList);
    }

    public UserOrderModel findUserOrderById(Long id) {
        UserOrder user = userOrderRepository.getOne(id);
        return new UserOrderModel(user);
    }

    public void deleteUserOrderById(Long id) {
        userOrderRepository.deleteById(id);
    }

    private List<UserOrderModel> convertToModel(List<UserOrder> userList){
        return userList.stream().map(UserOrderModel::new).collect(Collectors.toList());
    }
}
