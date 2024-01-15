package com.dogpound.dog;

import com.dogpound.common.dto.DtoFormImage;
import com.dogpound.dog.dto.DogDto;
import com.dogpound.dog.dto.DogDtoFormCreate;
import com.dogpound.dog.dto.DogDtoFormUpdate;
import com.dogpound.dog.exceptions.DogException;
import com.dogpound.dog.exceptions.DogExceptionType;
import com.dogpound.dog.exceptions.DogNotFound;
import com.dogpound.image.ImageService;
import com.dogpound.user.exceptions.UserNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DogService {
    private final IDogRepository repository;
    private final ImageService imageService;

    public List<DogDto> getAllDogs() {
        return repository.findAll().stream().map(DogDto::of).collect(Collectors.toList());
    }

    public DogDto getDogById(Long id) {
        return repository.findById(id).map(DogDto::of).orElseThrow(DogNotFound::new);
    }

    public List<DogDto> searchDogs(String text) {
        return repository.findByNameIgnoreCaseContaining(text).stream().map(DogDto::of).collect(Collectors.toList());
    }

    public DogDto createDog(DogDtoFormCreate form) {
        validateName(form.getName());
        String imageUrl = form.getImageUrl();
        MultipartFile imageFile = form.getImageFile();
        imageService.validateImageUrlOrFile(imageUrl, imageFile);

        Dog dog = form.toDog();
        handleDogImage(dog, imageUrl, imageFile);

        return DogDto.of(repository.save(dog));
    }

    public void updateDog(Long id, DogDtoFormUpdate form) {
        Dog dog = repository.findById(id).orElseThrow(DogNotFound::new);
        validateName(form.getName());
        form.updateDog(dog);

        repository.save(dog);
    }

    public String updateDogImage(Long id, DtoFormImage form) {
        Dog dog = repository.findById(id).orElseThrow(DogNotFound::new);

        String imageUrl = form.getImageUrl();
        MultipartFile imageFile = form.getImageFile();
        imageService.validateImageUrlOrFile(imageUrl, imageFile);

        String prevUrl = dog.getImageUrl();
        handleDogImage(dog, imageUrl, imageFile);
        imageService.deleteImage(prevUrl);
        repository.save(dog);

        return dog.getImageUrl();
    }

    public void deleteDog(Long id) {
        Dog dog = repository.findById(id).orElseThrow(UserNotFound::new);
        String imageUrl = dog.getImageUrl();
        repository.delete(dog);
        imageService.deleteImage(imageUrl);
    }

    private void validateName(String name) {
        if (repository.existsByName(name)) {
            throw new DogException(DogExceptionType.NAME_TAKEN);
        }
    }

    private void handleDogImage(Dog dog, String imageUrl, MultipartFile imageFile) {
        if (imageUrl != null) {
            dog.setImageUrl(imageUrl);
            return;
        }

        String url = imageService.uploadImage(imageFile);
        dog.setImageUrl(url);
    }

}
