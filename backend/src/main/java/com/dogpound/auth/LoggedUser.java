package com.dogpound.auth;

import com.dogpound.user.Role;
import com.dogpound.user.User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class LoggedUser implements UserDetails {
    @Getter
    private final Long id;
    private final String email;
    private final String password;
    @Getter
    private final String name;
    @Getter
    private final Role role;

    public LoggedUser(User user) {
        id = user.getId();
        email = user.getEmail();
        password = user.getPassword();
        name = user.getName();
        role = user.getRole();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>(createRoleAuthorities(role));
    }

    private List<GrantedAuthority> createRoleAuthorities(Role role) {
        List<String> names = new ArrayList<>();

        String roleSuperadmin = "ROLE_SUPERADMIN";
        String roleAdmin = "ROLE_ADMIN";
        String roleUser = "ROLE_USER";

        switch (role) {
            case SUPERADMIN -> names.addAll(List.of(roleSuperadmin, roleAdmin, roleUser));
            case ADMIN -> names.addAll(List.of(roleAdmin, roleUser));
            case USER -> names.add(roleUser);
        }
        return names.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
