import { computed, reactive } from "vue";
import { Message } from "../types/chatTypes";

export const useChat = () => {
  const messages = reactive<Message[]>([]);
  const reversedMessages = computed(() => messages.slice().reverse());

  const pushMessage = (msg: Message) => {
    messages.push(msg);
  };

  return { reversedMessages, pushMessage };
};
