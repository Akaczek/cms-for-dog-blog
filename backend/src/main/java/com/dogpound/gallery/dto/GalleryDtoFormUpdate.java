package com.dogpound.gallery.dto;

import com.dogpound.gallery.Gallery;
import lombok.Value;

@Value
public class GalleryDtoFormUpdate {
    private String title;

    public void updateGallery(Gallery gallery) {
        if (title != null) gallery.setTitle(title);
    }
}
