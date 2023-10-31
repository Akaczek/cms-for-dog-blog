package com.dogpound.User;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public Iterable<User> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public Optional<User> getUserById(@PathVariable Integer id) {
        return this.userService.getUserById(id);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }

    @PutMapping("/users/{id}")
    public User modifyUser(@PathVariable Integer id, @RequestBody User user) throws Exception {
        return this.userService.modifyUser(id, user);
    }

    @DeleteMapping("/users/{id}")
    public boolean deleteUser(@PathVariable Integer id) {
        return this.userService.deleteUser(id);
    }
}
