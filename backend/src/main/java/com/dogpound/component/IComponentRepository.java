package com.dogpound.component;

import com.dogpound.common.interfaces.ICrudRepository;

import java.util.List;

public interface IComponentRepository extends ICrudRepository<Component, Long> {
    List<Component> findAllByPageId(Long pageId);
}
