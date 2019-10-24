package com.modon.customisation.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;

@RestController
public class EmailController {

    @Autowired
    private SmtpMailSender smtpMailSender;

        @RequestMapping("/send-mail")
        public void sendMail() throws MessagingException {
            smtpMailSender.send("arasto.developer@gmail.com",
                                "Wellcome to Modon :)",
                                "Thank you for signing up.");
        }
}
