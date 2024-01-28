package com.dogpound.component.dto;

import com.dogpound.component.Component;
import lombok.Value;

@Value
public class ComponentDtoFormUpdate {
    private String title;
    private String imagePosition;
    private String content;
    private String buttonContent;
    private String path;
    private Long dogId;
    private Long galleryId;

    public void updateComponent(Component component) {
        if (title != null) component.setTitle(title);
        if (imagePosition != null) component.setImagePosition(imagePosition);
        if (content != null) component.setContent(content);
        if (buttonContent != null) component.setButtonContent(buttonContent);
        if (path != null) component.setPath(path);
    }

}
