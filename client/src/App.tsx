import { Typography } from "@mui/material";
import { ChatContainer } from "./components/ChatComponents";
import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";

export const App = () => {
  return (
    <ChatContainer>
      <Typography variant="h5" component="h1" sx={{ p: 2 }}>
        LINE
      </Typography>
      <MessageList />
      <MessageInput />
    </ChatContainer>
  );
};
