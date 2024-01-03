package com.dogpound.user;

import com.dogpound.core.interfaces.ICrudRepository;

import java.util.List;

public interface IUserRepository extends ICrudRepository<User, Long> {
    boolean existsByEmail(String email);

    List<User> findByNameIgnoreCaseContainingOrEmailIgnoreCaseContaining(String name, String email);
}
