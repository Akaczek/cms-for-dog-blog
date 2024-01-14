package com.dogpound.gallery.galleryitem.dto;

import com.dogpound.gallery.Gallery;
import com.dogpound.gallery.galleryitem.GalleryItem;
import lombok.Value;
import org.springframework.web.multipart.MultipartFile;

@Value
public class GalleryItemDtoFormCreate {
    private String title;
    private String imageUrl;
    private String path;
    private String content;
    private String buttonContent;

    private MultipartFile imageFile;

    public GalleryItem toGalleryItem(Gallery gallery) {
        GalleryItem item = new GalleryItem();

        item.setTitle(title);
        item.setPath(path);
        item.setContent(content);
        item.setButtonContent(buttonContent);
        item.setGallery(gallery);

        return item;
    }
}
