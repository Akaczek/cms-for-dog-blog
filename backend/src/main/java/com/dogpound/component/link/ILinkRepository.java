package com.dogpound.component.link;

import com.dogpound.common.interfaces.ICrudRepository;

import java.util.List;

public interface ILinkRepository extends ICrudRepository<Link, Long> {
    List<Link> findAllByComponentId(Long componentId);
}
