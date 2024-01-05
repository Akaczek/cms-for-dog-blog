package com.dogpound.config;

import com.dogpound.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "config")
@Getter
@Setter
public class Config {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotEmpty(message = "Key must not be empty")
    @Column(name = "key", unique = true)
    private String key;

    @NotEmpty(message = "Value must not be empty")
    @Column(name = "value")
    private String value;

    @Column(name = "description")
    private String description;

    @Column(name = "lastEditedAt")
    private String lastEditedAt;

    @ManyToOne
    @JoinColumn(name = "lastEditedBy")
    private User lastEditedBy;

    @PrePersist
    @PreUpdate
    private void prePersist() {
        lastEditedAt = Timestamp.valueOf(LocalDateTime.now()).toString();
    }
}
