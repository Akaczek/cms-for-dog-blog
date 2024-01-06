package com.dogpound.auth;

import com.dogpound.auth.dto.LoginDto;
import com.dogpound.auth.exceptions.BadCredentialsException;
import com.dogpound.user.IUserRepository;
import com.dogpound.user.User;
import com.dogpound.user.dto.UserDto;
import com.dogpound.validation.exceptions.WrongDataStructureException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {
    private final IUserRepository repository;

    public UserDto login(LoginDto form) {
        String email = form.getEmail();
        String password = form.getPassword();

        if (email == null || password == null) {
            throw new WrongDataStructureException();
        }
        User user = repository.findByEmail(email).orElseThrow(BadCredentialsException::new);
        if (user.getPassword().equals(password)) {
            SessionContext.put("userId", user.getId().toString());
            return UserDto.of(user);
        }

        throw new BadCredentialsException();
    }

    public void logout() {
        SessionContext.remove("userId");
    }
}
