import { useMessageList } from "../hooks/use-message-list";
import {
  MessageContainer,
  MessageContent,
  MessagesContainer,
  MessageTimestamp,
} from "./ChatComponents";

const formatDate = (timestamp: string, format: string) => {
  const date = new Date(timestamp);
  format = format.replace(/YYYY/, date.getFullYear().toString());
  format = format.replace(/MM/, (date.getMonth() + 1).toString());
  format = format.replace(/DD/, date.getDate().toString());
  format = format.replace(/hh/, date.getHours().toString());
  format = format.replace(/mm/, date.getMinutes().toString());
  format = format.replace(/ss/, date.getSeconds().toString());

  return format;
};

export const MessageList = () => {
  const messageList = useMessageList();

  return (
    <MessagesContainer>
      {messageList.map((message, index) => (
        <MessageContainer
          key={index}
          sx={{
            alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
          }}
        >
          <MessageContent
            sx={{
              bgcolor: message.sender === "user" ? "#8DE055" : "#EDF1EE",
              color: "#000",
            }}
          >
            {message.content}
          </MessageContent>
          <MessageTimestamp
            sx={{
              color: "#FFF",
              fontSize: "12px",
              textAlign: message.sender === "user" ? "right" : "left",
            }}
          >
            {formatDate(message.timestamp, "MM/DD hh:mm")}
          </MessageTimestamp>
        </MessageContainer>
      ))}
    </MessagesContainer>
  );
};
