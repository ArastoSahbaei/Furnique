package com.modon.customisation.controller;

import com.modon.customisation.email.SmtpMailSender;
import com.modon.customisation.entity.ConfirmationToken;
import com.modon.customisation.entity.User;
import com.modon.customisation.repository.ConfirmationTokenRepository;
import com.modon.customisation.repository.UserRepository;
import com.modon.customisation.service.EmailSenderService;
import com.modon.customisation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


@RestController
public class UserRegistrationController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService = new UserService();

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    private EmailSenderService emailSenderService;

    @CrossOrigin
    @PostMapping
    @RequestMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user, ModelAndView modelAndView) {

        // User existingUser = userRepository.findByEmailIdIgnoreCase(user.getEmail());

        User newUser = userService.registerNewUserAccount(user);

        userRepository.save(user);
        ConfirmationToken confirmationToken = new ConfirmationToken(user);
        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Complete Registration!");
        mailMessage.setFrom("arasto.developer@gmail.com");
        mailMessage.setText("To confirm your account, please click here : "
                +"http://localhost:8080/confirm-account?token="+confirmationToken.getConfirmationToken());

        emailSenderService.sendEmail(mailMessage);
        modelAndView.addObject("emailId", user.getEmail());
        modelAndView.setViewName("successfulRegisteration");

        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView confirmUserAccount(ModelAndView modelAndView, @RequestParam("token")String confirmationToken)
    {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
        if(token != null) {
            User user = userRepository.findByEmail(token.getUser().getEmail());
            user.setEnabled(true);
            userRepository.save(user);
            modelAndView.setViewName("accountVerified");
        } else {
            modelAndView.addObject("message","The link is invalid or broken!");
            modelAndView.setViewName("error");
        }
        return modelAndView;
    }

}