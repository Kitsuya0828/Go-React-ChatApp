import { styled } from "@mui/material/styles";
import { Box, TextField, IconButton } from "@mui/material";

const ChatContainer = styled(Box)({
  backgroundColor: "#7494C0",
  display: "flex",
  flexDirection: "column",
  height: "100svh",
  width: "100svw",
});

const MessagesContainer = styled(Box)({
  flexGrow: 1,
  margin: 0,
  overflowY: "scroll",
  padding: "10px",
});

const MessageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "10px",
});

const MessageContent = styled(Box)({
  backgroundColor: "#EEE",
  borderRadius: "10px",
  padding: "10px",
});

const MessageTimestamp = styled(Box)({
  marginTop: "5px",
  fontSize: "12px",
  color: "#999",
});

const InputContainer = styled(Box)({
  backgroundColor: "inherit",
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});

const ChatInput = styled(TextField)({
  backgroundColor: "#EDF1EE",
  flexGrow: 1,
});

const SendButton = styled(IconButton)({
  marginLeft: "10px",
});

export {
  ChatContainer,
  MessagesContainer,
  MessageContainer,
  MessageContent,
  MessageTimestamp,
  InputContainer,
  ChatInput,
  SendButton,
};
