package com.dogpound.gallery.galleryitem;

import com.dogpound.common.interfaces.ICrudRepository;

import java.util.List;

public interface IGalleryItemRepository extends ICrudRepository<GalleryItem, Long> {
    List<GalleryItem> findAllByGalleryId(Long galleryId);
}
