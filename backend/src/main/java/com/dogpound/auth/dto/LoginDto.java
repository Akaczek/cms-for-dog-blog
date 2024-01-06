package com.dogpound.auth.dto;

import com.dogpound.user.User;
import lombok.Data;
import lombok.Value;

@Data
public class LoginDto {
    private String email;
    private String password;
}
