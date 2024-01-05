package com.dogpound.user.dto;

import com.dogpound.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private String role;

    public static UserDto of(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user);
    }

    private UserDto(User user) {
        id = user.getId();
        email = user.getEmail();
        name = user.getName();
        role = user.getRole().toString();
    }
}
