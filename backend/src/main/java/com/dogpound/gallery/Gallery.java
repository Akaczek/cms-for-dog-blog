package com.dogpound.gallery;

import com.dogpound.gallery.dto.GalleryDto;
import com.dogpound.gallery.galleryitem.GalleryItem;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "galleries")
@Getter
@Setter
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @OneToMany(mappedBy = "gallery", cascade = CascadeType.ALL)
    private List<GalleryItem> galleryItems;

    public Gallery(GalleryDto gallery) {
        this.id = gallery.getId();
        this.title = gallery.getTitle();
    }

    public Gallery(String title) { this.title = title; }

    public Gallery() {}
}
