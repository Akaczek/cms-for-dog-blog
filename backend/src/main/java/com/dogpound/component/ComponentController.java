package com.dogpound.component;

import com.dogpound.auth.AuthService;
import com.dogpound.common.dto.DtoFormImage;
import com.dogpound.component.dto.ComponentDto;
import com.dogpound.component.dto.ComponentDtoFormCreate;
import com.dogpound.component.dto.ComponentDtoFormUpdate;
import com.dogpound.component.link.dto.LinkDto;
import com.dogpound.component.link.dto.LinkDtoFormCreate;
import com.dogpound.component.link.dto.LinkDtoFormUpdate;
import com.dogpound.user.Role;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/components")
public class ComponentController {

    private final AuthService authService;
    private final ComponentService componentService;
    Logger logger = LoggerFactory.getLogger(ComponentController.class);

    @GetMapping
    public List<ComponentDto> getAllComponents() {
        logger.info("Get all components");
        authService.checkAuthority(Role.USER);
        return componentService.getAllComponents();
    }

    @GetMapping("/{id}")
    public ComponentDto getComponentById(@PathVariable Long id) {
        logger.info("Get component by id=" + id);
        authService.checkAuthority(Role.USER);
        return componentService.getComponentById(id);
    }

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<ComponentDto> createComponent(@ModelAttribute ComponentDtoFormCreate form) {
        logger.info("Create component");
        authService.checkAuthority(Role.USER);
        ComponentDto result = componentService.createComponent(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateComponent(@PathVariable Long id, @RequestBody ComponentDtoFormUpdate form) {
        logger.info("Update component id=" + id);
        authService.checkAuthority(Role.USER);
        componentService.updateComponent(id, form);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/image")
    public String updateComponentImage(@PathVariable Long id, @ModelAttribute DtoFormImage form) {
        logger.info("Update component image id=" + id);
        authService.checkAuthority(Role.USER);
        return componentService.updateComponentImage(id, form);
    }

    @PostMapping("/{id}")
    public ResponseEntity<LinkDto> createComponentLink(@PathVariable Long id, @RequestBody LinkDtoFormCreate form) {
        logger.info("Create link componentId=" + id);
        authService.checkAuthority(Role.USER);
        LinkDto result = componentService.createLink(id, form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}/{linkId}")
    public ResponseEntity<Void> updateComponentLink(@PathVariable Long id, @PathVariable Long linkId, @RequestBody LinkDtoFormUpdate form) {
        logger.info("Update link componentId=" + id + " linkId=" + linkId);
        authService.checkAuthority(Role.USER);
        componentService.updateLink(id, linkId, form);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/{linkId}")
    public ResponseEntity<Void> deleteComponentLink(@PathVariable Long id, @PathVariable Long linkId) {
        logger.info("Delete link componentId=" + id + " linkId=" + linkId);
        authService.checkAuthority(Role.USER);
        componentService.deleteLink(linkId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComponent(@PathVariable Long id) {
        logger.info("Delete component id=" + id);
        authService.checkAuthority(Role.USER);
        componentService.deleteComponent(id);
        return ResponseEntity.ok().build();
    }
}
