package com.dogpound.auth;

import com.dogpound.auth.exceptions.LoginException;
import com.dogpound.auth.exceptions.LoginExceptionType;
import com.dogpound.user.IUserRepository;
import com.dogpound.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RestAuthenticationManager implements AuthenticationManager {
    private final IUserRepository repository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();
        User user = repository.findByEmail(email).orElse(null);
        if (user == null) {
            throw new LoginException(LoginExceptionType.EMAIL_NOT_FOUND);
        }

        LoggedUser loggedUser = new LoggedUser(user);
        if (password.equals(loggedUser.getPassword())) {
            return new UsernamePasswordAuthenticationToken(new LoggedUser(user), password, loggedUser.getAuthorities());
        }

        throw new LoginException(LoginExceptionType.BAD_CREDENTIALS);
    }
}
