package com.modon.customisation.controller;

import com.modon.customisation.entity.Contact;
import com.modon.customisation.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.internet.MimeMessage;

@CrossOrigin
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @CrossOrigin
    @PostMapping("/send")
    public void sendEmail(@RequestBody Contact contact) throws Exception {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        helper.setTo("arasto.sahbaei@gmail.com");
        helper.setSubject(contact.getSubject());
        helper.setText("Email: " + contact.getEmail() + "<br>" +
                           "Name: "  + contact.getName() + "<br> <br> <br>"
                                     + contact.getMessage(), true);
          try {
              mailSender.send(mimeMessage);
        } catch (MailException ex) {
              System.err.println(ex.getMessage());
        }
    }
}
