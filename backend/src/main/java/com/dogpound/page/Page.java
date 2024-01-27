package com.dogpound.page;

import com.dogpound.component.Component;
import com.dogpound.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "pages")
@Getter
@Setter
@NoArgsConstructor
public class Page {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotEmpty(message = "Path must not be empty")
    @Column(name = "path")
    private String path;

    @NotEmpty(message = "Text must not be empty")
    @Column(name = "name")
    private String name;

    @Column(name = "hideInHeader", columnDefinition = "boolean default true")
    private boolean isInHeader;

    @Column(name = "lastEditedAt")
    private String lastEditedAt;

    @ManyToOne
    @JoinColumn(name = "lastEditedBy")
    private User lastEditedBy;

    @ManyToOne
    @JoinColumn(name="page_id")
    private Page parentPage;

    @OneToMany(mappedBy="parentPage", cascade = CascadeType.ALL)
    private List<Page> subPages;

    @OneToMany(mappedBy="page", cascade = CascadeType.ALL)
    private List<Component> components;

    @PrePersist
    @PreUpdate
    private void prePersist() {
        lastEditedAt = Timestamp.valueOf(LocalDateTime.now()).toString();
    }

}
