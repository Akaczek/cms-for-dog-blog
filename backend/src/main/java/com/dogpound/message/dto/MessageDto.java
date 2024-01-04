package com.dogpound.message.dto;

import com.dogpound.message.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String message;
    private String date;

    public static MessageDto of(Message message) {
        if (message == null) {
            return null;
        }
        return new MessageDto(message);
    }

    private MessageDto(Message m) {
        id = m.getId();
        name = m.getName();
        email = m.getEmail();
        phone = m.getPhone();
        message = m.getMessage();
        date = m.getDate();

    }
}
