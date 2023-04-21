import { InputAdornment } from "@mui/material";
import { useSendMessage } from "../hooks/use-send-message";
import { ChatInput, InputContainer, SendButton } from "./ChatComponents";
import SendIcon from "@mui/icons-material/Send";

// const initialMessages: Message[] = [
//   {
//     content: "こんにちは",
//     timestamp: new Date("2023-04-21T10:00:00"),
//     sender: "user",
//   },
//   {
//     content: "こんにちは！",
//     timestamp: new Date("2023-04-21T10:01:00"),
//     sender: "bot",
//   },
//   {
//     content: "元気ですか？",
//     timestamp: new Date("2023-04-21T10:02:00"),
//     sender: "user",
//   },
//   {
//     content: "はい、元気です！",
//     timestamp: new Date("2023-04-21T10:03:00"),
//     sender: "bot",
//   },
// ];

export const MessageInput = () => {
  const { input, setInput, send } = useSendMessage();
  //   const [messages, setMessages] = useState<Message[]>(initialMessages);
  //   const [inputValue, setInputValue] = useState("");

  return (
    <form>
      <InputContainer>
        <ChatInput
          placeholder="メッセージを入力"
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInput(event.target.value);
          }}
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendButton
                  type="submit"
                  onClick={send}
                  disabled={input === ""}
                >
                  <SendIcon />
                </SendButton>
              </InputAdornment>
            ),
          }}
        />
      </InputContainer>
    </form>
  );
};
