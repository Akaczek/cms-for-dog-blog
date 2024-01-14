package com.dogpound.gallery.galleryitem.dto;

import com.dogpound.gallery.Gallery;
import com.dogpound.gallery.galleryitem.GalleryItem;
import lombok.Value;

@Value
public class GalleryItemDtoFormUpdate {
    private String title;
    private String imageUrl;
    private String path;
    private String content;
    private String buttonContent;

    public void updateGalleryItem(GalleryItem item, Gallery gallery) {
        if (title != null) item.setTitle(title);
        if (imageUrl != null) item.setImageUrl(imageUrl);
        if (path != null) item.setPath(path);
        if (content != null) item.setContent(content);
        if (buttonContent != null) item.setButtonContent(buttonContent);
        if (gallery != null) item.setGallery(gallery);
    }
}
