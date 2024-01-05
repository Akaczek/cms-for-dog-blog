package com.dogpound.config;

import com.dogpound.core.interfaces.ICrudRepository;

import java.util.Optional;

public interface IConfigRepository extends ICrudRepository<Config, Long> {
    boolean existsByKey(String key);

    Optional<Config> findByKey(String key);
}
