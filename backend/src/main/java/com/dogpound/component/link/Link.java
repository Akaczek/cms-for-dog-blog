package com.dogpound.component.link;

import com.dogpound.component.Component;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "links")
@Getter
@Setter
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotEmpty(message = "Path must not be empty")
    @Column(name = "path")
    private String path;

    @NotEmpty(message = "Text must not be empty")
    @Column(name = "text")
    private String text;

    @ManyToOne
    @JoinColumn(name = "component")
    private Component component;
}
