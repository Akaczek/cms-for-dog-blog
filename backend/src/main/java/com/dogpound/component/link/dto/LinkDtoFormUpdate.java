package com.dogpound.component.link.dto;

import com.dogpound.component.Component;
import com.dogpound.component.link.Link;
import lombok.Value;

@Value
public class LinkDtoFormUpdate {
    private String path;
    private String text;

    public void updateLink(Link link, Component component) {
        if (path != null) link.setPath(path);
        if (text != null) link.setText(text);
        if (component != null) link.setComponent(component);
    }
}
