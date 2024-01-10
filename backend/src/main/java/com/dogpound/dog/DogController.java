package com.dogpound.dog;

import com.dogpound.auth.AuthService;
import com.dogpound.dog.dto.DogDto;
import com.dogpound.dog.dto.DogDtoFormCreate;
import com.dogpound.dog.dto.DogDtoFormImage;
import com.dogpound.dog.dto.DogDtoFormUpdate;
import com.dogpound.user.Role;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dogs")
public class DogController {

    private final AuthService authService;
    private final DogService dogService;
    Logger logger = LoggerFactory.getLogger(DogController.class);

    @GetMapping
    public List<DogDto> getAllDogs() {
        logger.info("Get all dogs");
        authService.checkAuthority(Role.USER);
        return dogService.getAllDogs();
    }

    @GetMapping("/{id}")
    public DogDto getDogById(@PathVariable Long id) {
        logger.info("Get dog by id=" + id);
        authService.checkAuthority(Role.USER);
        return dogService.getDogById(id);
    }

    @GetMapping("/search/{text}")
    public List<DogDto> searchDogs(@PathVariable String text) {
        logger.info("Search dog text=" + text);
        authService.checkAuthority(Role.USER);
        return dogService.searchDogs(text);
    }

    @PostMapping
    public ResponseEntity<DogDto> createDog(
            @ModelAttribute DogDtoFormCreate form) {
        logger.info("Create dog");
        authService.checkAuthority(Role.USER);
        DogDto result = dogService.createDog(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateDog(@PathVariable Long id, @RequestBody DogDtoFormUpdate form) {
        logger.info("Update dog id=" + id);
        authService.checkAuthority(Role.USER);
        dogService.updateDog(id, form);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/image")
    public String updateDogImage(@PathVariable Long id, @ModelAttribute DogDtoFormImage form) {
        logger.info("Update dog image id=" + id);
        authService.checkAuthority(Role.USER);
        return dogService.updateDogImage(id, form);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDog(@PathVariable Long id) {
        logger.info("Delete dog id=" + id);
        authService.checkAuthority(Role.USER);
        dogService.deleteDog(id);
        return ResponseEntity.ok().build();
    }
}
