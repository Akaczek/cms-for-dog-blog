package com.dogpound.component.dto;

import com.dogpound.component.Component;
import com.dogpound.gallery.dto.GalleryDto;
import com.dogpound.gallery.galleryitem.GalleryItem;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDto;
import com.dogpound.dog.dto.DogDto;
import com.dogpound.component.link.Link;
import com.dogpound.component.link.dto.LinkDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ComponentDto {
    private Long id;
    private String title;
    private String imageUrl;
    private String imagePosition;
    private String content;
    private String path;
    private String type;
    private DogDto dog;
    private GalleryDto gallery;
    private List<LinkDto> links;

    public static ComponentDto of(Component component) {
        if (component == null) {
            return null;
        }
        return new ComponentDto(component);
    }

    private ComponentDto(Component component) {
        id = component.getId();
        title = component.getTitle();
        imageUrl = component.getImageUrl();
        imagePosition = component.getImagePosition();
        content = component.getContent();
        path = component.getPath();
        type = component.getType().toString();
        dog = DogDto.of(component.getDog());
        links = getLinksDto(component.getLinks());
        gallery = GalleryDto.of(component.getGallery());
    }

    private List<LinkDto> getLinksDto(List<Link> links) {
        if (links == null) {
            return Collections.emptyList();
        }
        return links.stream().map(LinkDto::of).collect(Collectors.toList());
    }

}
