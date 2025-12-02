<template>
  <h1 :id="myId">HOLA</h1>
  <input type="text" :value=myValue>
</template>

<script setup>
import { ref } from 'vue';

const myId = "bananas"
const myValue = ref("some value")

</script>

<style scoped></style>