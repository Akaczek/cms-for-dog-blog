package com.dogpound.component;

import com.dogpound.common.dto.DtoFormImage;
import com.dogpound.component.dto.ComponentDto;
import com.dogpound.component.dto.ComponentDtoFormCreate;
import com.dogpound.component.dto.ComponentDtoFormUpdate;
import com.dogpound.component.exceptions.ComponentException;
import com.dogpound.component.exceptions.ComponentExceptionType;
import com.dogpound.component.exceptions.ComponentNotFound;
import com.dogpound.component.link.dto.LinkDto;
import com.dogpound.component.link.dto.LinkDtoFormCreate;
import com.dogpound.component.link.dto.LinkDtoFormUpdate;
import com.dogpound.gallery.Gallery;
import com.dogpound.gallery.GalleryService;
import com.dogpound.gallery.dto.GalleryDto;
import com.dogpound.component.link.Link;
import com.dogpound.component.link.LinkService;
import com.dogpound.dog.Dog;
import com.dogpound.dog.DogService;
import com.dogpound.dog.dto.DogDto;
import com.dogpound.image.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ComponentService {
    private final IComponentRepository repository;
    private final LinkService linkService;
    private final GalleryService galleryService;
    private final DogService dogService;
    private final ImageService imageService;

    public List<String> getComponentTypes() {
        return Arrays.stream(ComponentType.values()).map(ComponentType::toString).collect(Collectors.toList());
    }

    public List<ComponentDto> getAllComponents() {
        return repository.findAll().stream().map(ComponentDto::of).collect(Collectors.toList());
    }

    public ComponentDto getComponentById(Long id) {
        return repository.findById(id).map(ComponentDto::of).orElseThrow(ComponentNotFound::new);
    }

    public ComponentDto createComponent(ComponentDtoFormCreate form) {
        Component component = form.toComponent();

        handleComponentImage(component, form.getImageUrl(), form.getImageFile());
        return ComponentDto.of(repository.save(component));
    }

    public void updateComponent(Long id, ComponentDtoFormUpdate form) {
        Component component = repository.findById(id).orElseThrow(ComponentNotFound::new);
        ComponentType type = component.getType();
        form.updateComponent(component);

        if (isTypeExpected(type, ComponentType.DOG_ITEM)) {
            Long dogId = form.getDogId();
            if (dogId != null) {
                DogDto dogDto = dogService.getDogById(form.getDogId());
                component.setDog(new Dog(dogDto));
            }
        } else if (isTypeExpected(type, ComponentType.GALLERY)) {
            Long galleryId = form.getGalleryId();
            if (galleryId != null) {
                GalleryDto galleryDto = galleryService.getGalleryById(form.getGalleryId());
                component.setGallery(new Gallery(galleryDto));
            }
        }

        repository.save(component);
    }

    public String updateComponentImage(Long id, DtoFormImage form) {
        Component component = repository.findById(id).orElseThrow(ComponentNotFound::new);

        String imageUrl = form.getImageUrl();
        MultipartFile imageFile = form.getImageFile();
        imageService.validateImageUrlOrFile(imageUrl, imageFile);

        String prevUrl = component.getImageUrl();
        handleComponentImage(component, imageUrl, imageFile);
        imageService.deleteImage(prevUrl);
        repository.save(component);

        return component.getImageUrl();
    }

    public LinkDto createLink(Long id, LinkDtoFormCreate form) {
        Component component = repository.findById(id).orElseThrow(ComponentNotFound::new);
        return linkService.createLink(component, form);
    }

    public void updateLink(Long componentId, Long linkId, LinkDtoFormUpdate form) {
        Component component = repository.findById(componentId).orElseThrow(ComponentNotFound::new);
        linkService.updateLink(linkId, component, form);
    }

    public void deleteLink(Long linkId) {
        linkService.deleteLink(linkId);
    }

    public void deleteComponent(Long id) {
        Component component = repository.findById(id).orElseThrow(ComponentNotFound::new);
        String imageUrl = component.getImageUrl();
        repository.delete(component);
        imageService.deleteImage(imageUrl);
    }

    private boolean isTypeExpected(ComponentType actual, ComponentType expected) {
        return expected.equals(actual);
    }

    private void validateComponentType(ComponentType type, ComponentDtoFormCreate form) {
        if (type == null) {
            throw new ComponentException(ComponentExceptionType.INVALID_TYPE);
        }
//        switch (type) {
//            case DOG_ITEM -> {
//                if (form.getDogId() == null) {
//                    throw new ComponentException(ComponentExceptionType.DOG_ID_IS_NULL);
//                }
//            }
//            case LINKS -> {
//                if (form.getLinks() == null) {
//                    throw new ComponentException(ComponentExceptionType.LINKS_IS_NULL);
//                }
//            }
//            case GALLERY -> {
//                if (form.getGalleryId() == null) {
//                    throw new ComponentException(ComponentExceptionType.GALLERY_IS_NULL);
//                }
//            }
//        }
    }

    private void handleComponentImage(Component component, String imageUrl, MultipartFile imageFile) {
        if (imageUrl != null) {
            component.setImageUrl(imageUrl);
            return;
        }

        if (imageFile != null) {
            String url = imageService.uploadImage(imageFile);
            component.setImageUrl(url);
        }
    }
}
