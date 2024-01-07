package com.dogpound.config;

import com.dogpound.auth.AuthService;
import com.dogpound.config.dto.ConfigDto;
import com.dogpound.config.dto.ConfigDtoFormCreate;
import com.dogpound.config.dto.ConfigDtoFormUpdate;
import com.dogpound.user.Role;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/config")
public class ConfigController {

    private final AuthService authService;
    private final ConfigService configService;
    Logger logger = LoggerFactory.getLogger(ConfigController.class);

    @GetMapping
    public List<ConfigDto> getAllConfig() {
        logger.info("Get all config");
        authService.checkAuthority(Role.USER);
        return configService.getAllConfig();
    }

    @GetMapping("/{id}")
    public ConfigDto getConfigById(@PathVariable Long id) {
        logger.info("Get config by id=" + id);
        authService.checkAuthority(Role.USER);
        return configService.getConfigById(id);
    }

    @GetMapping("/key/{key}")
    public ConfigDto getConfigByKey(@PathVariable String key) {
        logger.info("Get config by key=" + key);
        authService.checkAuthority(Role.USER);
        return configService.getConfigByKey(key);
    }

    @PostMapping
    public ResponseEntity<ConfigDto> createConfig(@RequestBody ConfigDtoFormCreate form) {
        logger.info("Create config");
        authService.checkAuthority(Role.USER);
        ConfigDto result = configService.createConfig(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateConfig(@PathVariable Long id, @RequestBody ConfigDtoFormUpdate form) {
        logger.info("Update config id=" + id);
        authService.checkAuthority(Role.USER);
        configService.updateConfig(id, form);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConfig(@PathVariable Long id) {
        logger.info("Delete config id=" + id);
        authService.checkAuthority(Role.USER);
        configService.deleteConfig(id);
        return ResponseEntity.ok().build();
    }
}
