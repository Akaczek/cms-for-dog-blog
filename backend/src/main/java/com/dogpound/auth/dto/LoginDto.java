package com.dogpound.auth.dto;

import lombok.Value;

@Value
public class LoginDto {
    private String email;
    private String password;
}
