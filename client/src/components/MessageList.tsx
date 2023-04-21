import { useMessageList } from "../hooks/use-message-list";
import {
  MessageContainer,
  MessageContent,
  MessagesContainer,
  MessageTimestamp,
} from "./ChatComponents";

export const MessageList = () => {
  const messageList = useMessageList();

  return (
    // <div>
    //   {messageList.map((m, i) => (
    //     <div key={i}>{m.content}</div>
    //   ))}
    // </div>
    <MessagesContainer>
      {messageList.map((message, index) => (
        <MessageContainer
          key={index}
          sx={{
            // alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
            alignSelf: "flex-start",
          }}
        >
          <MessageContent
            sx={{
              //   bgcolor: message.sender === "user" ? "#DCF8C6" : "#FFF",
              bgcolor: "#FFF",
              //   color: message.sender === "user" ? "#000" : "#333",
              color: "#333",
            }}
          >
            {message.content}
          </MessageContent>
          <MessageTimestamp
            sx={{
              color: "#999",
              fontSize: "12px",
              //   textAlign: message.sender === "user" ? "right" : "left",
              textAlign: "left",
            }}
          >
            {message.timestamp !== undefined
              ? message.timestamp.toLocaleString()
              : "00:00"}
          </MessageTimestamp>
        </MessageContainer>
      ))}
    </MessagesContainer>
  );
};
