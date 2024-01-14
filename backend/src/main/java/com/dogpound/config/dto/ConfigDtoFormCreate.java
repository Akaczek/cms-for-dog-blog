package com.dogpound.config.dto;

import com.dogpound.config.Config;
import com.dogpound.user.User;
import lombok.Value;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Value
public class ConfigDtoFormCreate {
    private String key;
    private String value;
    private String description;

    public Config toConfig(User user) {
        Config config = new Config();

        config.setKey(key);
        config.setValue(value);
        config.setDescription(description);
        config.setLastEditedAt(Timestamp.valueOf(LocalDateTime.now()).toString());
        config.setLastEditedBy(user);

        return config;
    }
}
