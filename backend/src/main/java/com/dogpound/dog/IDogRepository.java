package com.dogpound.dog;

import com.dogpound.common.interfaces.ICrudRepository;

import java.util.List;

public interface IDogRepository extends ICrudRepository<Dog, Long> {
    boolean existsByName(String name);

    List<Dog> findByNameIgnoreCaseContaining(String text);
}
