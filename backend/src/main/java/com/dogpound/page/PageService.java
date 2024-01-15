package com.dogpound.page;

import com.dogpound.auth.AuthService;
import com.dogpound.auth.exceptions.LoggedUserNotFound;
import com.dogpound.component.Component;
import com.dogpound.component.IComponentRepository;
import com.dogpound.component.exceptions.ComponentNotFound;
import com.dogpound.page.dto.PageDto;
import com.dogpound.page.dto.PageDtoFormCreate;
import com.dogpound.page.dto.PageDtoFormUpdate;
import com.dogpound.page.exceptions.PageNotFound;
import com.dogpound.user.IUserRepository;
import com.dogpound.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PageService {
    private final AuthService authService;
    private final IPageRepository pageRepository;
    private final IComponentRepository componentRepository;
    private final IUserRepository userRepository;

    public List<PageDto> getAllPages() {
        return pageRepository.findAll().stream().map(PageDto::of).collect(Collectors.toList());
    }

    public PageDto getPageById(Long id) {
        return pageRepository.findById(id).map(PageDto::of).orElseThrow(PageNotFound::new);
    }

    public PageDto createPage(PageDtoFormCreate form) {
        Long loggedUserId = authService.getLoggedUser().getId();
        User user = userRepository.findById(loggedUserId).orElseThrow(LoggedUserNotFound::new);
        Page page = form.toPage(user);

        Long parentPageId = form.getParentPageId();
        if (parentPageId != null) {
            Page parentPage = pageRepository.findById(form.getParentPageId()).orElseThrow(PageNotFound::new);
            page.setParentPage(parentPage);
        }

        return PageDto.of(pageRepository.save(page));
    }

    public void updatePage(Long id, PageDtoFormUpdate form) {
        Page page = pageRepository.findById(id).orElseThrow(PageNotFound::new);

        Long loggedUserId = authService.getLoggedUser().getId();
        User user = userRepository.findById(loggedUserId).orElseThrow(LoggedUserNotFound::new);
        form.updatePage(page, user);

        pageRepository.save(page);
    }

    public void addComponent(Long pageId, Long componentId) {
        Page page = pageRepository.findById(pageId).orElseThrow(PageNotFound::new);
        Component component = componentRepository.findById(componentId).orElseThrow(ComponentNotFound::new);

        List<Component> components = page.getComponents();
        components.add(component);
        page.setComponents(components);

        pageRepository.save(page);
    }

    public void deleteComponent(Long pageId, Long componentId) {
        Page page = pageRepository.findById(pageId).orElseThrow(PageNotFound::new);
        Component component = componentRepository.findById(componentId).orElseThrow(ComponentNotFound::new);


        List<Component> components = page.getComponents();
        components.remove(component);
        page.setComponents(components);

        pageRepository.save(page);
    }

    public void deletePage(Long id) {
        Page page = pageRepository.findById(id).orElseThrow(PageNotFound::new);
        page.getSubPages().forEach(subpage -> {
            deletePage(subpage.getId());
        });
        pageRepository.delete(page);
    }
}
