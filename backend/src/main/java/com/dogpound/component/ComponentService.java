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
import com.dogpound.page.IPageRepository;
import com.dogpound.page.Page;
import com.dogpound.page.PageService;
import com.dogpound.page.dto.PageDto;
import com.dogpound.page.exceptions.PageNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ComponentService {
    private final IComponentRepository repository;
    private final IPageRepository pageRepository;
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
        validateComponent(form);

//        Page page = pageRepository.findById(form.getPageId()).orElseThrow(PageNotFound::new);
//        component.setPage(page);
        handleComponentOrder(component, form.getOrder(), OrderAction.ADD);
        handleComponentImage(component, form.getImageUrl(), form.getImageFile());
        return ComponentDto.of(repository.save(component));
    }

    public void updateComponent(Long id, ComponentDtoFormUpdate form) {
        Component component = repository.findById(id).orElseThrow(ComponentNotFound::new);
        ComponentType type = component.getType();
        form.updateComponent(component);

        if (form.getOrder() != null) {
            handleComponentOrder(component, form.getOrder(), OrderAction.UPDATE);
        }

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
        handleComponentOrder(component, component.getOrder(), OrderAction.DELETE);
        repository.delete(component);
        imageService.deleteImage(imageUrl);
    }

    private boolean isTypeExpected(ComponentType actual, ComponentType expected) {
        return expected.equals(actual);
    }

    private void validateComponent(ComponentDtoFormCreate form) {
        if (form.getType() == null) {
            throw new ComponentException(ComponentExceptionType.INVALID_TYPE);
        }
        if (form.getPageId() == null) {
            throw new ComponentException(ComponentExceptionType.PAGE_ID_IS_NULL);
        }
        if (form.getOrder() == null) {
            throw new ComponentException(ComponentExceptionType.ORDER_IS_NULL);
        }
    }

    private void handleComponentOrder(Component component, Long order, OrderAction action) {
        Long pageId = component.getPageId();
        List<Component> pageComponents = repository.findAllByPageId(pageId);
        switch (action) {
            case ADD -> {
                component.setOrder(order);
                pageComponents.forEach(c -> handleAddComponentOrder(c, order));
            }
            case UPDATE -> {
                Long prevOrder = component.getOrder();
                pageComponents.forEach(c -> {
                    if (!Objects.equals(c.getId(), component.getId())) {
                        handleUpdateComponentOrder(c, order, prevOrder);
                    }
                });
                component.setOrder(order);
            }
            case DELETE -> {
                pageComponents.forEach(c -> {
                    if (!Objects.equals(c.getId(), component.getId())) {
                        handleDeleteComponentOrder(c, order);
                    }
                });
            }
        }
        repository.saveAll(pageComponents);
    }

    private void handleAddComponentOrder(Component component, Long order) {
        Long currentOrder = component.getOrder();
        if (currentOrder >= order) {
           component.setOrder(currentOrder + 1);
        }
    }

    private void handleUpdateComponentOrder(Component component, Long newOrder, Long prevOrder) {
        Long currentOrder = component.getOrder();
        if (newOrder > prevOrder) {
            if (currentOrder > prevOrder && currentOrder <= newOrder) {
                component.setOrder(currentOrder - 1);
            }
        } else if (newOrder < prevOrder) {
            if (currentOrder >= newOrder && currentOrder < prevOrder) {
                component.setOrder(currentOrder + 1);
            }
        }
    }

    private void handleDeleteComponentOrder(Component component, Long order) {
        Long currentOrder = component.getOrder();
        if (currentOrder > order) {
            component.setOrder(currentOrder - 1);
        }
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
