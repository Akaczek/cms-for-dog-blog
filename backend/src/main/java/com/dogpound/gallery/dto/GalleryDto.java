package com.dogpound.gallery.dto;

import com.dogpound.gallery.Gallery;
import com.dogpound.gallery.galleryitem.GalleryItem;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GalleryDto {
    private Long id;
    private String title;
    private List<GalleryItemDto> galleryItems;

    public static GalleryDto of(Gallery gallery) {
        if (gallery == null) {
            return null;
        }
        return new GalleryDto(gallery);
    }

    private GalleryDto(Gallery gallery) {
        this.id = gallery.getId();
        this.title = gallery.getTitle();
        this.galleryItems = getGalleryItemsDto(gallery.getGalleryItems());
    }

    private List<GalleryItemDto> getGalleryItemsDto(List<GalleryItem> items) {
        if (items == null) {
            return Collections.emptyList();
        }
        return items.stream().map(GalleryItemDto::of).collect(Collectors.toList());
    }
}
