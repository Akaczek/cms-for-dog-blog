package com.dogpound.auth;

import com.dogpound.auth.dto.LoginDto;
import com.dogpound.user.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final RestAuthenticationManager authenticationManager;
    Logger logger = LoggerFactory.getLogger(AuthService.class);

    public void login(LoginDto form) {
        logger.info("JESTEM");
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(form.getEmail(), form.getPassword());
        Authentication authentication = authenticationManager.authenticate(token);
        logger.info("AUTH" + authentication.toString());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
