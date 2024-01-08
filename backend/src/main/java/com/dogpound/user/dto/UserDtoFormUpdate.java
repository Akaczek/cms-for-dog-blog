package com.dogpound.user.dto;

import com.dogpound.user.User;
import lombok.Value;

@Value
public class UserDtoFormUpdate {
    private String email;
    private String name;

    public void updateUser(User user) {
        if (name != null) user.setName(name);
        if (email != null) user.setEmail(email);
    }
}
