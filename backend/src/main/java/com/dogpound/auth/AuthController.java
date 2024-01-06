package com.dogpound.auth;

import com.dogpound.auth.dto.LoginDto;
import com.dogpound.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService service;
    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public UserDto login(@RequestBody LoginDto form) {
        logger.info("Login");
        return service.login(form);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        logger.info("Logout");
        service.logout();
        return ResponseEntity.ok().build();
    }
}
