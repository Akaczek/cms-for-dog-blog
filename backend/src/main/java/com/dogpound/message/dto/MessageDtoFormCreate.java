package com.dogpound.message.dto;

import com.dogpound.message.Message;
import lombok.Value;

@Value
public class MessageDtoFormCreate {
    private String name;
    private String email;
    private String phone;
    private String message;
    private String date;

    public Message toMessage() {
        Message m = new Message();

        m.setName(name);
        m.setEmail(email);
        m.setPhone(phone);
        m.setMessage(message);
        m.setDate(date);

        return m;
    }
}
