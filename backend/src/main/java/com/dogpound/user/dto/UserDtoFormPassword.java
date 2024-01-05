package com.dogpound.user.dto;

import lombok.Value;

@Value
public class UserDtoFormPassword {
    private String oldPassword;
    private String newPassword;
}
