import { websocketAtom } from "../state/websocket";
import { messageListAtom } from "../state/message";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { Message } from "../models/message";

export const useMessageList = (): Message[] => {
  const socket = useRecoilValue(websocketAtom);
  const messageList = useRecoilValue(messageListAtom);

  const updateMessageList = useRecoilCallback(
    ({ set }) =>
      (message: Message) => {
        set(messageListAtom, [...messageList, message]);
      }
  );
  socket.onmessage = (msg) => {
    const message = JSON.parse(msg.data as string) as Message;
    updateMessageList(message);
  };

  return messageList;
};
