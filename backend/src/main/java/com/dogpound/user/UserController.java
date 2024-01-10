package com.dogpound.user;

import com.dogpound.auth.AuthService;
import com.dogpound.user.dto.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final AuthService authService;
    private final UserService userService;
    Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping
    public List<UserDto> getAllUsers() {
        logger.info("Get all users");
        authService.checkAuthority(Role.ADMIN);
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable Long id) {
        logger.info("Get user by id=" + id);
        authService.checkAuthority(Role.ADMIN);
        return userService.getUserById(id);
    }

    @GetMapping("/search/{text}")
    public List<UserDto> searchUsers(@PathVariable String text) {
        logger.info("Search user text=" + text);
        authService.checkAuthority(Role.ADMIN);
        return userService.searchUsers(text);
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDtoFormCreate form) {
        logger.info("Create user");
        authService.checkAuthority(Role.ADMIN);
        UserDto result = userService.createUser(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable Long id, @RequestBody UserDtoFormUpdate form) {
        logger.info("Update user by id=" + id);
        authService.checkIfLogged(id);
        userService.updateUser(id, form);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/role")
    public ResponseEntity<Void> modifyUserRole(@PathVariable Long id, @RequestBody UserDtoFormRole form) {
        logger.info("Modify password user id=" + id);
        authService.checkAuthority(Role.ADMIN);
        userService.modifyUserRole(id, form);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/password")
    public ResponseEntity<Void> modifyUserPassword(@PathVariable Long id, @RequestBody UserDtoFormPassword form) {
        logger.info("Modify password user id=" + id);
        authService.checkIfLogged(id);
        userService.modifyUserPassword(id, form);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        logger.info("Delete user id=" + id);
        authService.checkAuthority(Role.ADMIN);
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
