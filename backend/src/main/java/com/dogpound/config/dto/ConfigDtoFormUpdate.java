package com.dogpound.config.dto;

import com.dogpound.config.Config;
import com.dogpound.user.User;
import lombok.Value;

@Value
public class ConfigDtoFormUpdate {
    private String key;
    private String value;
    private String description;
    private Long userId;

    public void updateConfig(Config config, User user) {
        if (key != null) config.setKey(key);
        if (value != null) config.setValue(value);
        if (description != null) config.setDescription(description);
        if (user != null) config.setLastEditedBy(user);
    }
}
