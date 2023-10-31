package com.dogpound.User;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Iterable<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public Optional<User> getUserById(Integer id) {
        return this.userRepository.findById(id);
    }

    public User addUser(User user) {
        return this.userRepository.save(user);
    }

    public User modifyUser(Integer id, User user) throws Exception {
        User userToUpdate = this.userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found."));
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setName(user.getName());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setAdmin(user.isAdmin());
        userToUpdate.setSuperAdmin(user.isSuperAdmin());
        return this.userRepository.save(userToUpdate);
    }

    public boolean deleteUser(Integer id) {
        if (this.userRepository.existsById(id)) {
            this.userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
