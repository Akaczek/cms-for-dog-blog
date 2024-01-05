package com.dogpound.user.dto;

import com.dogpound.user.User;
import lombok.Value;

@Value
public class UserDtoFormUpdate {
    private String email;
    private String name;
    private String role;

    public void updateUser(User user) {
        if (name != null) user.setName(name);
        if (email != null) user.setEmail(email);
        if (role != null) user.setRole(role);
    }
}
