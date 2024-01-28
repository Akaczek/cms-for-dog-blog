package com.dogpound.component.dto;

import com.dogpound.component.Component;
import com.dogpound.component.link.dto.LinkDtoFormCreate;
import lombok.Value;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Value
public class ComponentDtoFormCreate {
    private String type;
    private String title;
    private String imagePosition;
    private String content;
    private String buttonContent;
    private String path;
    private Long dogId;
    private Long galleryId;
    private List<LinkDtoFormCreate> links;

    private String imageUrl;
    private MultipartFile imageFile;

    public Component toComponent() {
        Component component = new Component();

        component.setTitle(title);
        component.setImagePosition(imagePosition);
        component.setContent(content);
        component.setButtonContent(buttonContent);
        component.setPath(path);
        component.setTypeFromString(type);

        return component;
    }
}
