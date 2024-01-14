package com.dogpound.gallery.dto;

import com.dogpound.gallery.Gallery;
import lombok.Data;

@Data
public class GalleryDtoFormCreate {
    private String title;

    public Gallery toGallery() {
        return new Gallery(title);
    }
}
