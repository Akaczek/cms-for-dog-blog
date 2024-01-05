package com.dogpound.message;

import com.dogpound.message.dto.MessageDto;
import com.dogpound.message.dto.MessageDtoFormCreate;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/messages")
public class MessageController {

    private final MessageService service;
    Logger logger = LoggerFactory.getLogger(MessageController.class);

    @GetMapping
    public List<MessageDto> getAllMessages() {
        logger.info("Get all messages");
        return service.getAllMessages();
    }

    @GetMapping("/{id}")
    public MessageDto getMessageById(@PathVariable Long id) {
        logger.info("Get message by id=" + id);
        return service.getMessageById(id);
    }

    @PostMapping
    public ResponseEntity<MessageDto> createMessage(@RequestBody MessageDtoFormCreate form) {
        logger.info("Create message");
        MessageDto result = service.createMessage(form);
        return ResponseEntity.created(URI.create("/" + result.getId())).body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        logger.info("Delete message id=" + id);
        service.deleteMessage(id);
        return ResponseEntity.noContent().build();
    }
}
