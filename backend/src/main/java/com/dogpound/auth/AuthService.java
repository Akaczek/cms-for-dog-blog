package com.dogpound.auth;

import com.dogpound.auth.dto.LoginDto;
import com.dogpound.auth.exceptions.BadCredentialsException;
import com.dogpound.auth.exceptions.LoggedUserNotFound;
import com.dogpound.user.IUserRepository;
import com.dogpound.user.Role;
import com.dogpound.user.User;
import com.dogpound.validation.exceptions.UnauthorizedException;
import com.dogpound.validation.exceptions.WrongDataStructureException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;


@Service
@RequiredArgsConstructor
public class AuthService {
    private final IUserRepository repository;

    public LoggedUser login(LoginDto form) {
        String email = form.getEmail();
        String password = form.getPassword();

        if (email == null || password == null) {
            throw new WrongDataStructureException();
        }
        User user = repository.findByEmail(email).orElseThrow(BadCredentialsException::new);
        if (user.getPassword().equals(password)) {
            SessionContext.put("userId", user.getId().toString());
            return LoggedUser.of(user);
        }

        throw new BadCredentialsException();
    }

    public void logout() {
        SessionContext.remove("userId");
    }


    public LoggedUser getLoggedUser() {
        String stringId = SessionContext.get("userId");
        if (stringId == null) {
            throw new LoggedUserNotFound();
        }
        Long id = Long.valueOf(stringId);
        return repository.findById(id).map(LoggedUser::of).orElseThrow(LoggedUserNotFound::new);
    }

    public void checkAuthority(Role role) {
        LoggedUser loggedUser = getLoggedUser();
        if (!loggedUser.hasAuthority(role)) {
            throw new UnauthorizedException();
        }
    }

    public void checkIfLogged(Long userId) {
        LoggedUser loggedUser = getLoggedUser();
        if (!Objects.equals(loggedUser.getId(), userId)) {
            throw new UnauthorizedException();
        }
    }
}
