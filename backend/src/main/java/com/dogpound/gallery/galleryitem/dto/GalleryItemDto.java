package com.dogpound.gallery.galleryitem.dto;

import com.dogpound.gallery.galleryitem.GalleryItem;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class GalleryItemDto {
    private Long id;
    private String title;
    private String imageUrl;
    private String path;
    private String content;
    private String buttonContent;

    public static GalleryItemDto of(GalleryItem item) {
        if (item == null) {
            return null;
        }
        return new GalleryItemDto(item);
    }

    private GalleryItemDto(GalleryItem item) {
        id = item.getId();
        title = item.getTitle();
        imageUrl = item.getImageUrl();
        path = item.getPath();
        content = item.getContent();
        buttonContent = item.getButtonContent();
    }
}
