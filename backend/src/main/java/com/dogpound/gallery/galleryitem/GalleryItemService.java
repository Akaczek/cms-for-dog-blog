package com.dogpound.gallery.galleryitem;

import com.dogpound.common.dto.DtoFormImage;
import com.dogpound.gallery.Gallery;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDto;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDtoFormCreate;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDtoFormUpdate;
import com.dogpound.gallery.galleryitem.exceptions.GalleryItemNotFound;
import com.dogpound.image.ImageService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GalleryItemService {
    private final IGalleryItemRepository repository;
    private final ImageService imageService;

    public List<GalleryItemDto> getGalleryItemsByGalleryId(Long galleryId) {
        return repository.findAllByGalleryId(galleryId).stream().map(GalleryItemDto::of).collect(Collectors.toList());
    }

    public GalleryItemDto getGalleryItemById(Long id) {
        return repository.findById(id).map(GalleryItemDto::of).orElseThrow(GalleryItemNotFound::new);
    }

    @Transactional
    public List<GalleryItem> createMultipleGalleryItems(Gallery gallery, List<GalleryItemDtoFormCreate> galleryItemsForm) {
        return galleryItemsForm.stream().map(form -> {
            String imageUrl = form.getImageUrl();
            MultipartFile imageFile = form.getImageFile();
            imageService.validateImageUrlOrFile(imageUrl, imageFile);

            GalleryItem item = form.toGalleryItem(gallery);
            handleGalleryItemImage(item, imageUrl, imageFile);
            return repository.save(item);
        }).collect(Collectors.toList());
    }

    public GalleryItemDto createGalleryItem(Gallery gallery, GalleryItemDtoFormCreate form) {
        String imageUrl = form.getImageUrl();
        MultipartFile imageFile = form.getImageFile();
        imageService.validateImageUrlOrFile(imageUrl, imageFile);

        GalleryItem item = form.toGalleryItem(gallery);
        handleGalleryItemImage(item, imageUrl, imageFile);
        return GalleryItemDto.of(repository.save(item));
    }

    public void updateGalleryItem(Long id, Gallery gallery, GalleryItemDtoFormUpdate form) {
        GalleryItem item = repository.findById(id).orElseThrow(GalleryItemNotFound::new);
        form.updateGalleryItem(item, gallery);

        repository.save(item);
    }

    public String updateGalleryItemImage(Long id, DtoFormImage form) {
        GalleryItem item = repository.findById(id).orElseThrow(GalleryItemNotFound::new);

        String imageUrl = form.getImageUrl();
        MultipartFile imageFile = form.getImageFile();
        imageService.validateImageUrlOrFile(imageUrl, imageFile);

        String prevUrl = item.getImageUrl();
        handleGalleryItemImage(item, imageUrl, imageFile);
        imageService.deleteImage(prevUrl);
        repository.save(item);

        return item.getImageUrl();
    }

    public void deleteGalleryItem(Long id) {
        GalleryItem item = repository.findById(id).orElseThrow(GalleryItemNotFound::new);
        String imageUrl = item.getImageUrl();
        repository.delete(item);
        imageService.deleteImage(imageUrl);
    }

    private void handleGalleryItemImage(GalleryItem item, String imageUrl, MultipartFile imageFile) {
        if (imageUrl != null) {
            item.setImageUrl(imageUrl);
            return;
        }

        String url = imageService.uploadImage(imageFile);
        item.setImageUrl(url);
    }
}
