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
    private Boolean isAdmin;
    private Boolean isSuperAdmin;

    public static UserDto of(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user);
    }

    private UserDto(User user) {
        id = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.isAdmin = user.isAdmin();
        this.isSuperAdmin = user.isSuperAdmin();
    }
}