package com.dogpound.user;

import com.dogpound.auth.AuthService;
import com.dogpound.auth.SessionContext;
import com.dogpound.user.dto.*;
import com.dogpound.user.exceptions.*;
import com.dogpound.validation.exceptions.WrongDataStructureException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final IUserRepository repository;
    private final AuthService authService;

    public List<UserDto> getAllUsers() {

        return repository.findAll().stream().map(UserDto::of).collect(Collectors.toList());
    }

    public UserDto getUserById(Long id) {
        return repository.findById(id).map(UserDto::of).orElseThrow(UserNotFound::new);
    }

    public List<UserDto> searchUsers(String text) {
        return repository.findByNameIgnoreCaseContainingOrEmailIgnoreCaseContaining(text, text).stream().map(UserDto::of).collect(Collectors.toList());
    }

    public UserDto createUser(UserDtoFormCreate form) {
        validateEmail(form.getEmail());
        validatePassword(form.getPassword());
        validateRole(form.getRole());
        User user = form.toUser();

        return UserDto.of(repository.save(user));
    }

    public void updateUser(Long id, UserDtoFormUpdate form) {
        User user = repository.findById(id).orElseThrow(UserNotFound::new);
        validateEmail(form.getEmail());
        form.updateUser(user);

        repository.save(user);
    }

    public void modifyUserRole(Long id, UserDtoFormRole form) {
        String role = form.getRole();
        validateRole(role);
        User user = repository.findById(id).orElseThrow(UserNotFound::new);

        if (user.getRole() == Role.SUPERADMIN) {
            throw new RoleException(RoleExceptionType.CANNOT_MODIFY_SUPERADMIN);
        }

        user.setRole(role);
        repository.save(user);
    }

    public void modifyUserPassword(Long id, UserDtoFormPassword form) {
        String oldPassword = form.getOldPassword();
        String newPassword = form.getNewPassword();

        if (oldPassword == null || newPassword == null) {
            throw new WrongDataStructureException();
        }

        validatePassword(newPassword);

        User user = repository.findById(id).orElseThrow(UserNotFound::new);

        if (!oldPassword.matches(user.getPassword())) {
            throw new UserException(UserExceptionType.WRONG_PASSWORD);
        }

        if (newPassword.matches(user.getPassword())) {
            throw new UserException(UserExceptionType.SAME_PASSWORD);
        }

        user.setPassword(newPassword);
        repository.save(user);
    }

    public void deleteUser(Long id) {
        User user = repository.findById(id).orElseThrow(UserNotFound::new);
        repository.delete(user);
    }

    private void validateEmail(String email) {
        if (repository.existsByEmail(email)) {
            throw new UserException(UserExceptionType.EMAIL_TAKEN);
        }
    }

    private void validatePassword(String password) {
        if (password == null || password.equals("")) {
            throw new UserException(UserExceptionType.WRONG_PASSWORD);
        }
    }

    private void validateRole(String role) {
        if (Role.of(role) == Role.SUPERADMIN) {
            throw new RoleException(RoleExceptionType.CANNOT_SET_SUPERADMIN);
        }
    }
}
