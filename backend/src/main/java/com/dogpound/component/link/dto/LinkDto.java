package com.dogpound.component.link.dto;

import com.dogpound.component.link.Link;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LinkDto {
    private Long id;
    private String path;
    private String text;

    public static LinkDto of(Link link) {
        if (link == null) {
            return null;
        }
        return new LinkDto(link);
    }

    private LinkDto(Link link) {
        id = link.getId();
        path = link.getPath();
        text = link.getText();
    }
}
