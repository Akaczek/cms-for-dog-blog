package com.dogpound.user;

import com.dogpound.core.interfaces.ICrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IUserRepository extends ICrudRepository<User, Long> {
    boolean existsByEmail(String email);

    List<User> findByNameIgnoreCaseContainingOrEmailIgnoreCaseContaining(String name, String email);
}
