package com.dogpound.auth;

import com.dogpound.auth.dto.LoginDto;
import com.dogpound.user.IUserRepository;
import com.dogpound.user.User;
import com.dogpound.user.UserService;
import com.dogpound.user.exceptions.UserNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final IUserRepository repository;

    public void login(LoginDto form) {
        User user = repository.findByEmail(form.getEmail()).orElseThrow(UserNotFound::new);
        LoggedUser loggedUser = new LoggedUser(user);

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loggedUser, form.getPassword(), loggedUser.getAuthorities());
        Authentication authentication = authenticationManager.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    public Optional<LoggedUser> getPrincipal() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof LoggedUser) {
            return Optional.of((LoggedUser) principal);
        } else {
            return Optional.empty();
        }
    }
}
