package com.dogpound.image;

import com.dogpound.auth.AuthService;
import com.dogpound.user.Role;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.PathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequiredArgsConstructor
@RequestMapping("/images")
public class ImageController {

    private final AuthService authService;
    private final ImageService imageService;
    Logger logger = LoggerFactory.getLogger(ImageController.class);

    @GetMapping(
            value = "/{fileName}",
            produces = { MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE })
    public ResponseEntity<Resource> getImage(@PathVariable String fileName) {
        logger.info("Get image filename=" + fileName);
        authService.checkAuthority(Role.USER);
        PathResource resource = imageService.getImage(fileName);
        return ResponseEntity.ok(resource);
    }

    @PostMapping(
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.TEXT_PLAIN_VALUE)
    public String uploadImage(@RequestBody MultipartFile file) {
        logger.info("Upload image");
        authService.checkAuthority(Role.USER);
        return imageService.uploadImage(file);
    }

    @DeleteMapping("/{fileName}")
    public ResponseEntity<Void> deleteImage(@PathVariable String fileName) {
        logger.info("Delete image filename=" + fileName);
        authService.checkAuthority(Role.USER);
        imageService.deleteImage(fileName);
        return ResponseEntity.ok().build();
    }

}
