package com.modon.customisation.controller;

import com.modon.customisation.entity.Contact;
import com.modon.customisation.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private EmailSenderService emailSenderService;

    @CrossOrigin
    @PostMapping("/send")
    public void sendEmail(@RequestBody Contact contact) throws Exception {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo("arasto.sahbaei@gmail.com");
            mailMessage.setSubject(contact.getSubject());
            mailMessage.setText("Email: " + contact.getEmail() +
                                            contact.getMessage());
          try {
            emailSenderService.sendEmail(mailMessage);
        } catch (MailException ex) {
            System.err.println(ex.getMessage());
        }
    }
}
