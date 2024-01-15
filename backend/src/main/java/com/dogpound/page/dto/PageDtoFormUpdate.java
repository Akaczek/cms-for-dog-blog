package com.dogpound.page.dto;

import com.dogpound.page.Page;
import com.dogpound.user.User;
import lombok.Value;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Value
public class PageDtoFormUpdate {
    private String path;
    private String name;
    private Boolean isInHeader;

    public void updatePage(Page page, User user) {
        if (path != null) page.setPath(path);
        if (name != null) page.setName(name);
        if (isInHeader != null) page.setInHeader(isInHeader);
        page.setLastEditedAt(Timestamp.valueOf(LocalDateTime.now()).toString());
        if (user != null) page.setLastEditedBy(user);
    }
}
