package com.dogpound.user;

import com.dogpound.core.enums.Role;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Email(message = "Email must be valid")
    @Column(name = "email", unique = true)
    private String email;

    @NotEmpty(message = "Name must not be empty")
    @Column(name = "name")
    private String name;

    @NotEmpty(message = "Password must not be empty")
    @Column(name = "password")
    private String password;

    @Column(name = "isAdmin", columnDefinition = "boolean default false")
    private boolean isAdmin;

    @Column(name = "isSuperAdmin", columnDefinition = "boolean default false")
    private boolean isSuperAdmin;

    public User() {}

    public User(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.name = user.getName();
        this.isAdmin = user.isAdmin();
        this.isSuperAdmin = user.isSuperAdmin();
    }

    public User(String email, String password, String name, boolean isAdmin, boolean isSuperAdmin) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.isAdmin = isAdmin;
        this.isSuperAdmin = isSuperAdmin;
    }

    public Role getRole() {
        if (isSuperAdmin) return Role.SUPERADMIN;
        if (isAdmin) return Role.ADMIN;
        return Role.USER;
    }
}
