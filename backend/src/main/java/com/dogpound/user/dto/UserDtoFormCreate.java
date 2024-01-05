package com.dogpound.user.dto;

import com.dogpound.user.Role;
import com.dogpound.user.User;
import lombok.Value;

@Value
public class UserDtoFormCreate {
    private String email;
    private String password;
    private String name;
    private String role;

    public User toUser() {
        User user = new User();

        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        user.setRole(role);

        return user;
    }
}
