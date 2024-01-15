package com.dogpound.common.dto;

import lombok.Value;
import org.springframework.web.multipart.MultipartFile;

@Value
public class DtoFormImage {
    private String imageUrl;
    private MultipartFile imageFile;
}
