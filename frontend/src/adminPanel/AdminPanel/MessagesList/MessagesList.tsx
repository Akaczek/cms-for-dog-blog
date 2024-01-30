import { FC, useContext } from "react";

import { MessagesContext } from "../../../lib/context/messagesContext";
import {
  List,
  ListHeader,
  ListWrapper,
  ListItemValue,
} from "../../../shared/List/List.styles";
import { MessagesListItem, MessagesSecondaryListItem } from "./MessagesList.styles";

const MessagesList: FC = () => {
  const { messages } = useContext(MessagesContext);

  return (
    <ListWrapper>
      <ListHeader>
        Messages
      </ListHeader>
      <List>
        <MessagesListItem>
          <ListItemValue>Name</ListItemValue>
          <ListItemValue>Email</ListItemValue>
          <ListItemValue>Phone</ListItemValue>
          <ListItemValue>Message</ListItemValue>
        </MessagesListItem>
        {messages.map((message) => (
          <MessagesSecondaryListItem>
            <ListItemValue>{message.name}</ListItemValue>
            <ListItemValue>{message.email}</ListItemValue>
            <ListItemValue>{message.phone}</ListItemValue>
            <ListItemValue>{message.message}</ListItemValue>
          </MessagesSecondaryListItem>
        ))}
      </List>
    </ListWrapper>
  );
};

export default MessagesList;