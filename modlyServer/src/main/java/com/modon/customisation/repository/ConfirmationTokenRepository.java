package com.modon.customisation.repository;

import com.modon.customisation.entity.ConfirmationToken;
import com.modon.customisation.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, String> {

    ConfirmationToken findByConfirmationToken(String confirmationToken);

    ConfirmationToken findByUser(User user);

}
