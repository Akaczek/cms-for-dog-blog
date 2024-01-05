package com.dogpound.message;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "submittedMessages")
@Getter
@Setter
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotEmpty(message = "Name must not be empty")
    @Column(name = "name")
    private String name;

    @Email(message = "Email must be valid")
    @Column(name = "email")
    private String email;

    @NotEmpty(message = "Phone must not be empty")
    @Column(name = "phone")
    private String phone;

    @NotEmpty(message = "Message must not be empty")
    @Column(name = "message")
    private String message;

    @Column(name = "date")
    private String date;

    @PrePersist
    private void prePersist() {
        date = Timestamp.valueOf(LocalDateTime.now()).toString();
    }

}
