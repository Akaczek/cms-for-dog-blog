package com.dogpound.dog.dto;

import lombok.Value;
import org.springframework.web.multipart.MultipartFile;

@Value
public class DogDtoFormImage {
    private String imageUrl;
    private MultipartFile imageFile;
}
