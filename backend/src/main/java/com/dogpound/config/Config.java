package com.dogpound.config;

import com.dogpound.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "config")
@Getter
@Setter
public class Config {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Getter
    @Setter
    @NotEmpty(message = "Key must not be empty")
    @Column(name = "key", unique = true)
    private String key;

    @Getter
    @Setter
    @NotEmpty(message = "Value must not be empty")
    @Column(name = "value")
    private String value;

    @Getter
    @Setter
    @Column(name = "description")
    private String description;

    @Getter
    @Setter
    @Column(name = "lastEditedAt")
    private String lastEditedAt;

    @ManyToOne
    private User user;

}
