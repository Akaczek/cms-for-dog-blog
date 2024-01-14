package com.dogpound.gallery;

import com.dogpound.common.dto.DtoFormImage;
import com.dogpound.gallery.dto.GalleryDto;
import com.dogpound.gallery.dto.GalleryDtoFormCreate;
import com.dogpound.gallery.dto.GalleryDtoFormUpdate;
import com.dogpound.gallery.exceptions.GalleryNotFound;
import com.dogpound.gallery.galleryitem.GalleryItemService;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDto;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDtoFormCreate;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDtoFormUpdate;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class GalleryService {
    private final IGalleryRepository repository;
    private final GalleryItemService itemService;

    public List<GalleryDto> getAllGalleries() {
        return repository.findAll().stream().map(GalleryDto::of).collect(Collectors.toList());
    }

    public GalleryDto getGalleryById(Long id) {
        return repository.findById(id).map(GalleryDto::of).orElseThrow(GalleryNotFound::new);
    }

    public GalleryDto createGallery(GalleryDtoFormCreate form) {
        Gallery gallery = form.toGallery();
        return GalleryDto.of(repository.save(gallery));
    }

    public void updateGallery(Long id, GalleryDtoFormUpdate form) {
        Gallery gallery = repository.findById(id).orElseThrow(GalleryNotFound::new);
        form.updateGallery(gallery);

        repository.save(gallery);
    }

    public GalleryItemDto createGalleryItem(Long id, GalleryItemDtoFormCreate form) {
        Gallery gallery = repository.findById(id).orElseThrow(GalleryNotFound::new);
        return itemService.createGalleryItem(gallery, form);
    }

    public void updateGalleryItem(Long galleryId, Long itemId, GalleryItemDtoFormUpdate form) {
        Gallery gallery = repository.findById(galleryId).orElseThrow(GalleryNotFound::new);
        itemService.updateGalleryItem(itemId, gallery, form);
    }

    public String updateGalleryItemImage(Long itemId, DtoFormImage form) {
        return itemService.updateGalleryItemImage(itemId, form);
    }

    public void deleteGalleryItem(Long itemId) {
        itemService.deleteGalleryItem(itemId);
    }

    public void deleteGallery(Long id) {
        Gallery gallery = repository.findById(id).orElseThrow(GalleryNotFound::new);
        gallery.getGalleryItems().forEach(item -> {
            itemService.deleteGalleryItem(item.getId());
        });
        repository.delete(gallery);
    }
}
