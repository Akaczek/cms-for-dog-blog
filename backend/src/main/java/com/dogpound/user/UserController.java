package com.dogpound.user;

import com.dogpound.user.dto.UserDto;
import com.dogpound.user.dto.UserDtoFormCreate;
import com.dogpound.user.dto.UserDtoFormPassword;
import com.dogpound.user.dto.UserDtoFormUpdate;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService service;
    Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping
    public List<UserDto> getAllUsers() {
        logger.info("Get all users");
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable Long id) {
        logger.info("Get user by id=" + id);
        return service.getUserById(id);
    }

    @GetMapping("/search/{text}")
    public List<UserDto> searchUsers(@PathVariable String text) {
        logger.info("Search user text=" + text);
        return service.searchUsers(text);
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDtoFormCreate form) {
        logger.info("Create user");
        UserDto result = service.createUser(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable Long id, @RequestBody UserDtoFormUpdate form) {
        logger.info("Update user by id=" + id);
        service.updateUser(id, form);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/password")
    public ResponseEntity<Void> modifyUserPassword(@PathVariable Long id, @RequestBody UserDtoFormPassword form) {
        logger.info("Modify password user id=" + id);
        service.modifyUserPassword(id, form);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        logger.info("Delete user id=" + id);
        service.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
