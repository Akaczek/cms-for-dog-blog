package com.dogpound.page;

import com.dogpound.auth.AuthService;
import com.dogpound.page.dto.PageDto;
import com.dogpound.page.dto.PageDtoFormCreate;
import com.dogpound.page.dto.PageDtoFormUpdate;
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
@RequestMapping("/pages")
public class PageController {

    private final AuthService authService;
    private final PageService pageService;
    Logger logger = LoggerFactory.getLogger(PageController.class);

    @GetMapping
    public List<PageDto> getAllPages() {
        logger.info("Get all pages");
        authService.checkAuthority(Role.USER);
        return pageService.getAllPages();
    }

    @GetMapping("/{id}")
    public PageDto getPageById(@PathVariable Long id) {
        logger.info("Get page by id=" + id);
        authService.checkAuthority(Role.USER);
        return pageService.getPageById(id);
    }

    @PostMapping
    public ResponseEntity<PageDto> createPage(@RequestBody PageDtoFormCreate form) {
        logger.info("Create page");
        authService.checkAuthority(Role.USER);
        PageDto result = pageService.createPage(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updatePage(@PathVariable Long id, @RequestBody PageDtoFormUpdate form) {
        logger.info("Update page id=" + id);
        authService.checkAuthority(Role.USER);
        pageService.updatePage(id, form);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/{componentId}")
    public ResponseEntity<Void> addComponent(@PathVariable Long id, @PathVariable Long componentId) {
        logger.info("Add component id=" + id + " to page id=" + id);
        authService.checkAuthority(Role.USER);
        pageService.addComponent(id, componentId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/{componentId}")
    public ResponseEntity<Void> deleteComponent(@PathVariable Long id, @PathVariable Long componentId) {
        logger.info("Delete component id=" + id + " from page id=" + id);
        authService.checkAuthority(Role.USER);
        pageService.deleteComponent(id, componentId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePage(@PathVariable Long id) {
        logger.info("Delete page id=" + id);
        authService.checkAuthority(Role.USER);
        pageService.deletePage(id);
        return ResponseEntity.ok().build();
    }
}
