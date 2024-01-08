package com.dogpound.config.dto;

import com.dogpound.config.Config;
import com.dogpound.user.User;
import lombok.Value;

import java.sql.Timestamp;
import java.time.LocalDateTime;

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
        config.setLastEditedAt(Timestamp.valueOf(LocalDateTime.now()).toString());
        if (user != null) config.setLastEditedBy(user);
    }
}
