<script setup lang="ts">
import { ref } from "vue";
import { useChat } from "../composables/useChat";
import { HubConnectionBuilder, JsonHubProtocol } from "@microsoft/signalr"

try {
  const connection = new HubConnectionBuilder()
    .withUrl("/api")
    .build();

  connection.start().then(() => {
    console.log(`connection started!:${connection.state}`);
  });

  connection.on("message", (newMessage: string) => {
    pushMessage({ user: "userA", message: newMessage })
  })
} catch (e) {
  console.error("connection build error");
  console.error(e);
}

const { pushMessage, reversedMessages } = useChat();
const inputText = ref("");

const onClick = async () => {
  await fetch("/api/sendMessage", {
    method: "POST",
    body: JSON.stringify({ message: inputText.value })
  });
  inputText.value = "";
}
</script>

<template>
  <h1>hellooooo</h1>

  <div>
    <div id="inputWrpper">
      <input type="text" name="inputText" id="inputText" v-model="inputText" />
      <input type="button" value="send" id="inputButton" @click="onClick" />
    </div>
    <div id="messagesWrapper">
      <div v-for="(msg, index) of reversedMessages" :key="index">{{ msg.message }}</div>
    </div>
  </div>
</template>
