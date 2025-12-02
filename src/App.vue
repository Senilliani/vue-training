<template>
  <h1 :class="{ highlight: myCondition, red: true }">HOLA</h1>
</template>

<script setup>
import { ref } from 'vue';
let myCondition = true
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