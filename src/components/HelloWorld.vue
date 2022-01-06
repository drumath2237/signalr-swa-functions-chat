<script setup lang="ts">
import { ref } from "vue";
import { useChat } from "../composables/useChat";

const hello = ref<string>("");
fetch("/api/hello")
  .then((res) => res.json())
  .then((data) => {
    hello.value = data.text;
  });

const { pushMessage, reversedMessages } = useChat();
const inputText = ref("");

const onClick = () => {
  pushMessage({
    user: "userA",
    message: inputText.value
  });
  inputText.value = "";
}
</script>

<template>
  <h1>hellooooo</h1>
  <p id="hello">{{ hello }}</p>

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
