package com.dogpound.gallery.galleryitem;

import com.dogpound.gallery.Gallery;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "gallery_items")
@Getter
@Setter
public class GalleryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "path")
    private String path;

    @Column(name = "content")
    private String content;

    @Column(name = "buttonContent")
    private String buttonContent;

    @ManyToOne
    @JoinColumn(name = "gallery")
    private Gallery gallery;
}
