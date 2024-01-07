package com.dogpound.user;

import com.dogpound.auth.SessionContext;
import com.dogpound.user.dto.UserDto;
import com.dogpound.user.dto.UserDtoFormCreate;
import com.dogpound.user.dto.UserDtoFormPassword;
import com.dogpound.user.dto.UserDtoFormUpdate;
import com.dogpound.user.exceptions.UserException;
import com.dogpound.user.exceptions.UserExceptionType;
import com.dogpound.user.exceptions.UserNotFound;
import com.dogpound.validation.exceptions.WrongDataStructureException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final IUserRepository repository;

    public List<UserDto> getAllUsers() {
        return repository.findAll().stream().map(UserDto::of).collect(Collectors.toList());
    }

    public UserDto getLoggedUser() {
        String stringId = SessionContext.get("userId");
        if (stringId == null) {
            throw new UserNotFound();
        }
        Long id = Long.valueOf(stringId);
        return repository.findById(id).map(UserDto::of).orElseThrow(UserNotFound::new);
    }

    public UserDto getUserById(Long id) {
        return repository.findById(id).map(UserDto::of).orElseThrow(UserNotFound::new);
    }

    public List<UserDto> searchUsers(String text) {
        return repository.findByNameIgnoreCaseContainingOrEmailIgnoreCaseContaining(text, text).stream().map(UserDto::of).collect(Collectors.toList());
    }

//    @Secured("ROLE_ADMIN")
    public UserDto createUser(UserDtoFormCreate form) {
        if (repository.existsByEmail(form.getEmail())) {
            throw new UserException(UserExceptionType.EMAIL_TAKEN);
        }
        validatePassword(form.getPassword());
        User user = form.toUser();

        return UserDto.of(repository.save(user));
    }

    public void updateUser(Long id, UserDtoFormUpdate form) {
        User user = repository.findById(id).orElseThrow(UserNotFound::new);

        if (repository.existsByEmail(form.getEmail())) {
            throw new UserException(UserExceptionType.EMAIL_TAKEN);
        }
        form.updateUser(user);

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

    private void validatePassword(String password) {
        if (password == null || password.equals("")) {
            throw new UserException(UserExceptionType.WRONG_PASSWORD);
        }
    }
}
