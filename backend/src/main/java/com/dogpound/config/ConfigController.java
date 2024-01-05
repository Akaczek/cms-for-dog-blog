package com.dogpound.config;

import com.dogpound.config.dto.ConfigDto;
import com.dogpound.config.dto.ConfigDtoFormCreate;
import com.dogpound.config.dto.ConfigDtoFormUpdate;
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

    private final ConfigService service;
    Logger logger = LoggerFactory.getLogger(ConfigController.class);

    @GetMapping
    public List<ConfigDto> getAllConfig() {
        logger.info("Get all config");
        return service.getAllConfig();
    }

    @GetMapping("/{id}")
    public ConfigDto getConfigById(@PathVariable Long id) {
        logger.info("Get config by id=" + id);
        return service.getConfigById(id);
    }

    @GetMapping("/key/{key}")
    public ConfigDto getConfigByKey(@PathVariable String key) {
        logger.info("Get config by key=" + key);
        return service.getConfigByKey(key);
    }

    @PostMapping
    public ResponseEntity<ConfigDto> createConfig(@RequestBody ConfigDtoFormCreate form) {
        logger.info("Create config");
        ConfigDto result = service.createConfig(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateConfig(@PathVariable Long id, @RequestBody ConfigDtoFormUpdate form) {
        logger.info("Update config id=" + id);
        service.updateConfig(id, form);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConfig(@PathVariable Long id) {
        logger.info("Delete config id=" + id);
        service.deleteConfig(id);
        return ResponseEntity.noContent().build();
    }
}
