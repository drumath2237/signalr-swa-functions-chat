<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const hello = ref<string>("");
fetch("/api/hello")
  .then((res) => res.json())
  .then((data) => {
    hello.value = data.text;
  });
</script>

<template>
  <h1>{{ msg }}</h1>
  <p id="hello">{{ hello }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
