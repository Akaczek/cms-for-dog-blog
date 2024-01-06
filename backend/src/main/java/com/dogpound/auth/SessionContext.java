package com.dogpound.auth;

import com.dogpound.user.User;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class SessionContext {
    private static final Map<String, String> context = new HashMap<>();

    public static String get(String key) {
        return context.get(key);
    }

    public static void put(String key, String value) {
        context.put(key, value);
    }

    public static void remove(String key) {
        context.remove(key);
    }

    public static boolean exists(String key) {
        return context.containsKey(key);
    }
}
