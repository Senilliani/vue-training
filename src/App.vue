<template>
  <h2>Computed</h2>
  <input type="text" v-model="userName">
  <h3>Hola {{ userName }}</h3>
  <h4>Tu nombre tiene {{ nameLength }} letras</h4>
</template>

<script setup>
import { computed, ref } from 'vue';

const userName = ref("Mar")
// const nameLength = ref(userName.value.length)
const nameLength = computed(() => {
  return userName.value.length
})
</script>

<style scoped></style>