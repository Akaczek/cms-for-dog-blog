package com.dogpound.page.dto;

import com.dogpound.component.Component;
import com.dogpound.component.dto.ComponentDto;
import com.dogpound.page.Page;
import com.dogpound.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageDto {
    private Long id;
    private String path;
    private String name;
    private boolean isInHeader;
    private String lastEditedAt;
    private UserDto lastEditedBy;
    private Long parentPageId;
    private List<PageDto> subpages;
    private List<ComponentDto> components;

    public static PageDto of(Page page) {
        if (page == null) {
            return null;
        }
        return new PageDto(page);
    }

    private PageDto(Page page) {
        id = page.getId();
        path = page.getPath();
        name = page.getName();
        isInHeader = page.isInHeader();
        lastEditedAt = page.getLastEditedAt();
        lastEditedBy = UserDto.of(page.getLastEditedBy());
        parentPageId = getParentPageId(page.getParentPage());
        subpages = getSubpagesDto(page.getSubPages());
        components = getComponentsDto(page.getComponents());
    }

    private Long getParentPageId(Page parentPage) {
        if (parentPage == null) {
            return null;
        }
        return parentPage.getId();
    }

    private List<PageDto> getSubpagesDto(List<Page> pages) {
        if (pages == null) {
            return Collections.emptyList();
        }
        return pages.stream().map(PageDto::of).collect(Collectors.toList());
    }

    private List<ComponentDto> getComponentsDto(List<Component> components) {
        if (components == null) {
            return Collections.emptyList();
        }
        return components.stream().map(ComponentDto::of).collect(Collectors.toList());
    }
}
