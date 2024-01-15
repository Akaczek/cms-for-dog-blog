package com.dogpound.component;

import com.dogpound.component.exceptions.ComponentException;
import com.dogpound.component.exceptions.ComponentExceptionType;
import com.dogpound.gallery.Gallery;
import com.dogpound.gallery.galleryitem.GalleryItem;
import com.dogpound.dog.Dog;
import com.dogpound.component.link.Link;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "addable_components")
@Getter
@Setter
public class Component {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "imagePosition")
    private String imagePosition;

    @Column(name = "content")
    private String content;

    @Column(name = "path")
    private String path;

    @Column(name = "type")
    private ComponentType type;

    @OneToOne
    @JoinColumn(name = "dog")
    private Dog dog;

    @OneToOne
    @JoinColumn(name = "gallery")
    private Gallery gallery;

    @OneToMany(mappedBy = "component", cascade = CascadeType.ALL)
    private List<Link> links;


    public void setTypeFromString(String type) {
        if (type == null) {
            throw new ComponentException(ComponentExceptionType.INVALID_TYPE);
        }
        setType(ComponentType.of(type));
    }
}
