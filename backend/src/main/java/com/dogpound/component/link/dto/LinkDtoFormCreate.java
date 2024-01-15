package com.dogpound.component.link.dto;

import com.dogpound.component.Component;
import com.dogpound.component.link.Link;
import lombok.Value;

@Value
public class LinkDtoFormCreate {
    private String text;
    private String path;

    public Link toLink(Component component) {
        Link link = new Link();

        link.setPath(path);
        link.setText(text);
        link.setComponent(component);

        return link;
    }
}
