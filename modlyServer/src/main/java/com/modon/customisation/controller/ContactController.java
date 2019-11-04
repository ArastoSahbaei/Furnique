package com.modon.customisation.controller;

import com.modon.customisation.entity.Contact;
import com.modon.customisation.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("/send")
    public void sendEmail(@RequestBody Contact contact) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo("arasto.sahbaei@gmail.com");
            mailMessage.setSubject(contact.getSubject());
            mailMessage.setFrom(contact.getEmail());
            mailMessage.setText(contact.getMessage());
            emailSenderService.sendEmail(mailMessage);
        } catch (Exception e) {
            e.getMessage();
        }
    }
}
