package com.dogpound.page.dto;

import com.dogpound.page.Page;
import com.dogpound.user.User;
import lombok.Value;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Value
public class PageDtoFormCreate {
    private String path;
    private String name;
    private boolean isInHeader;
    private Long parentPageId;

    public Page toPage(User user) {
        Page page = new Page();

        page.setPath(path);
        page.setName(name);
        page.setInHeader(isInHeader);
        page.setLastEditedAt(Timestamp.valueOf(LocalDateTime.now()).toString());
        page.setLastEditedBy(user);

        return page;
    }
}
