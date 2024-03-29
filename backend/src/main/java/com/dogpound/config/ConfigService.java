package com.dogpound.config;

import com.dogpound.auth.AuthService;
import com.dogpound.auth.LoggedUser;
import com.dogpound.auth.exceptions.LoggedUserNotFound;
import com.dogpound.config.dto.ConfigDto;
import com.dogpound.config.dto.ConfigDtoFormCreate;
import com.dogpound.config.dto.ConfigDtoFormUpdate;
import com.dogpound.config.exceptions.ConfigException;
import com.dogpound.config.exceptions.ConfigExceptionType;
import com.dogpound.config.exceptions.ConfigNotFound;
import com.dogpound.user.IUserRepository;
import com.dogpound.user.User;
import com.dogpound.user.UserService;
import com.dogpound.user.exceptions.UserNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ConfigService {
    private final IConfigRepository configRepository;
    private final IUserRepository userRepository;
    private final AuthService authService;

    public List<ConfigDto> getAllConfig() {
        return configRepository.findAll().stream().map(ConfigDto::of).collect(Collectors.toList());
    }

    public ConfigDto getConfigById(Long id) {
        return configRepository.findById(id).map(ConfigDto::of).orElseThrow(ConfigNotFound::new);
    }

    public ConfigDto getConfigByKey(String key) {
        return configRepository.findByKey(key).map(ConfigDto::of).orElseThrow(ConfigNotFound::new);
    }

    public ConfigDto createConfig(ConfigDtoFormCreate form) {
        if (configRepository.existsByKey(form.getKey())) {
            throw new ConfigException(ConfigExceptionType.KEY_TAKEN);
        }

        Long loggedUserId = authService.getLoggedUser().getId();
        User user = userRepository.findById(loggedUserId).orElseThrow(LoggedUserNotFound::new);
        Config config = form.toConfig(user);

        return ConfigDto.of(configRepository.save(config));
    }

    public void updateConfig(Long id, ConfigDtoFormUpdate form) {
        Config config = configRepository.findById(id).orElseThrow(ConfigNotFound::new);

        if (configRepository.existsByKey(form.getKey())) {
            throw new ConfigException(ConfigExceptionType.KEY_TAKEN);
        }

        Long loggedUserId = authService.getLoggedUser().getId();
        User user = userRepository.findById(loggedUserId).orElseThrow(LoggedUserNotFound::new);
        form.updateConfig(config, user);

        configRepository.save(config);
    }

    public void deleteConfig(Long id) {
        Config config = configRepository.findById(id).orElseThrow(ConfigNotFound::new);
        configRepository.delete(config);
    }
}
