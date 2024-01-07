package com.dogpound.auth;

import com.dogpound.user.Role;
import com.dogpound.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoggedUser {
    private Long id;
    private String email;
    private String name;
    private String role;
    private List<String> authorities;

    public static LoggedUser of(User user) {
        if (user == null) {
            return null;
        }
        return new LoggedUser(user);
    }

    public boolean hasAuthority(Role role) {
        return getAuthorities().contains(role.toString());
    }

    private List<String> createAuthorities() {
        String ROLE_SUPERADMIN = Role.SUPERADMIN.toString();
        String ROLE_ADMIN = Role.ADMIN.toString();
        String ROLE_USER = Role.USER.toString();
        return switch (Role.of(role)) {
            case SUPERADMIN -> List.of(ROLE_SUPERADMIN, ROLE_ADMIN, ROLE_USER);
            case ADMIN -> List.of(ROLE_ADMIN, ROLE_USER);
            case USER -> List.of(ROLE_USER);
        };
    }

    private LoggedUser(User user) {
        id = user.getId();
        email = user.getEmail();
        name = user.getName();
        role = user.getRole().toString();
        authorities = createAuthorities();
    }

}
