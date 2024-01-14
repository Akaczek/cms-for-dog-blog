package com.dogpound.component.link;

import com.dogpound.component.Component;
import com.dogpound.component.link.dto.LinkDto;
import com.dogpound.component.link.dto.LinkDtoFormCreate;
import com.dogpound.component.link.dto.LinkDtoFormUpdate;
import com.dogpound.component.link.exceptions.LinkNotFound;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LinkService {
    private final ILinkRepository repository;

    public List<LinkDto> getLinksByComponentId(Long componentId) {
        return repository.findAllByComponentId(componentId).stream().map(LinkDto::of).collect(Collectors.toList());
    }

    public LinkDto getLinkById(Long id) {
        return repository.findById(id).map(LinkDto::of).orElseThrow(LinkNotFound::new);
    }

    @Transactional
    public List<Link> createMultipleLinks(Component component, List<LinkDtoFormCreate> linksForm) {
        return linksForm.stream().map(form -> {
            Link link = form.toLink(component);
            return repository.save(link);
        }).collect(Collectors.toList());
    }

    public LinkDto createLink(Component component, LinkDtoFormCreate form) {
        Link link = form.toLink(component);
        return LinkDto.of(repository.save(link));
    }

    public void updateLink(Long id, Component component, LinkDtoFormUpdate form) {
        Link link = repository.findById(id).orElseThrow(LinkNotFound::new);
        form.updateLink(link, component);

        repository.save(link);
    }

    public void deleteLink(Long id) {
        Link link = repository.findById(id).orElseThrow(LinkNotFound::new);
        repository.delete(link);
    }
}
