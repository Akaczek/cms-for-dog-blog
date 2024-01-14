package com.dogpound.auth;

import com.dogpound.auth.dto.LoginDto;
import com.dogpound.user.Role;
import com.dogpound.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService service;
    Logger logger = LoggerFactory.getLogger(AuthController.class);


    @GetMapping("/logged")
    public LoggedUser getLoggedUser() {
        logger.info("Get logged user");
        service.checkAuthority(Role.USER);
        return service.getLoggedUser();
    }

    @PostMapping("/login")
    public LoggedUser login(@RequestBody LoginDto form) {
        logger.info("Login");
        return service.login(form);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        logger.info("Logout");
        service.checkAuthority(Role.USER);
        service.logout();
        return ResponseEntity.ok().build();
    }
}
