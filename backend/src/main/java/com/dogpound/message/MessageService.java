package com.dogpound.message;

import com.dogpound.message.dto.MessageDto;
import com.dogpound.message.dto.MessageDtoFormCreate;
import com.dogpound.message.exceptions.MessageNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final IMessageRepository repository;

    public List<MessageDto> getAllMessages() {
        return repository.findAll().stream().map(MessageDto::of).collect(Collectors.toList());
    }

    public MessageDto getMessageById(Long id) {
        return repository.findById(id).map(MessageDto::of).orElseThrow(MessageNotFound::new);
    }

    public MessageDto createMessage(MessageDtoFormCreate form) {
        Message message = form.toMessage();
        return MessageDto.of(repository.save(message));
    }

    public void deleteMessage(Long id) {
        Message message = repository.findById(id).orElseThrow(MessageNotFound::new);
        repository.delete(message);
    }
}
