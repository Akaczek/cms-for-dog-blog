package com.dogpound.gallery;

import com.dogpound.auth.AuthService;
import com.dogpound.common.dto.DtoFormImage;
import com.dogpound.dog.DogController;
import com.dogpound.dog.dto.DogDto;
import com.dogpound.gallery.dto.GalleryDto;
import com.dogpound.gallery.dto.GalleryDtoFormCreate;
import com.dogpound.gallery.dto.GalleryDtoFormUpdate;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDto;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDtoFormCreate;
import com.dogpound.gallery.galleryitem.dto.GalleryItemDtoFormUpdate;
import com.dogpound.user.Role;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/galleries")
public class GalleryController {

    private final AuthService authService;
    private final GalleryService galleryService;
    Logger logger = LoggerFactory.getLogger(DogController.class);

    @GetMapping
    public List<GalleryDto> getAllGalleries() {
        logger.info("Get all galleries");
        authService.checkAuthority(Role.USER);
        return galleryService.getAllGalleries();
    }

    @GetMapping("/{id}")
    public GalleryDto getGalleryById(@PathVariable Long id) {
        logger.info("Get gallery by id=" + id);
        authService.checkAuthority(Role.USER);
        return galleryService.getGalleryById(id);
    }

    @PostMapping
    public ResponseEntity<GalleryDto> createGallery(@RequestBody GalleryDtoFormCreate form) {
        logger.info("Create gallery");
        authService.checkAuthority(Role.USER);
        GalleryDto result = galleryService.createGallery(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateGallery(@PathVariable Long id, GalleryDtoFormUpdate form) {
        logger.info("Update gallery id=" + id);
        authService.checkAuthority(Role.USER);
        galleryService.updateGallery(id, form);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}")
    public ResponseEntity<GalleryItemDto> createGalleryItem(@PathVariable Long id, @ModelAttribute GalleryItemDtoFormCreate form) {
        logger.info("Create gallery item galleryId=" + id);
        authService.checkAuthority(Role.USER);
        GalleryItemDto result = galleryService.createGalleryItem(id, form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}/{itemId}")
    public ResponseEntity<Void> updateGalleryItem(@PathVariable Long id, @PathVariable Long itemId, @RequestBody GalleryItemDtoFormUpdate form) {
        logger.info("Update gallery item galleryId=" + id + " itemId=" + itemId);
        authService.checkAuthority(Role.USER);
        galleryService.updateGalleryItem(id, itemId, form);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/{itemId}/image")
    public String updateGalleryItemImage(@PathVariable Long id, @PathVariable Long itemId, @ModelAttribute DtoFormImage form) {
        logger.info("Update gallery item image galleryId=" + id + " itemId=" + itemId);
        authService.checkAuthority(Role.USER);
        return galleryService.updateGalleryItemImage(itemId, form);
    }

    @DeleteMapping("/{id}/{itemId}")
    public ResponseEntity<Void> deleteGalleryItem(@PathVariable Long id, @PathVariable Long itemId) {
        logger.info("Delete gallery item galleryId=" + id + " itemId=" + itemId);
        authService.checkAuthority(Role.USER);
        galleryService.deleteGalleryItem(itemId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGallery(@PathVariable Long id) {
        logger.info("Delete gallery id=" + id);
        authService.checkAuthority(Role.USER);
        galleryService.deleteGallery(id);
        return ResponseEntity.ok().build();
    }

}
