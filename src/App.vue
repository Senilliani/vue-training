<template>
  <h1 :class="{ highlight: myCondition, red: true }">HOLA</h1>
  <h2 v-if="myCondition">Si la condición se cumple</h2>
  <h3 v-else-if="condition2">Esta es la condición 2</h3>
  <h3 v-else>No se cumplen las demás</h3>
</template>

<script setup>
import { ref } from 'vue';
let myCondition = ''
let condition2 = false
</script>

<style scoped>
.highlight {
  background-color: black;
  color: yellow;
  text-align: center;
}

.red {
  color: red;
}
</style>