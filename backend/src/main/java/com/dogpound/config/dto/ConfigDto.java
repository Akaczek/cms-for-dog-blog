package com.dogpound.config.dto;

import com.dogpound.config.Config;
import com.dogpound.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConfigDto {
    private Long id;
    private String key;
    private String value;
    private String description;
    private String lastEditedAt;
    private UserDto lastEditedBy;

    public static ConfigDto of(Config config) {
        if (config == null) {
            return null;
        }
        return new ConfigDto(config);
    }

    private ConfigDto(Config config) {
        id = config.getId();
        key = config.getKey();
        value = config.getValue();
        description = config.getDescription();
        lastEditedAt = config.getLastEditedAt();
        lastEditedBy = UserDto.of(config.getLastEditedBy());
    }
}
