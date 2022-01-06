import { computed, reactive } from "vue";

export const useChat = () => {
  const messages = reactive<string[]>([]);
  const reversedMessages = computed(() => messages.slice().reverse());

  const pushMessage = (msg: string) => {
    messages.push(msg);
  };

  return { reversedMessages, pushMessage };
};
