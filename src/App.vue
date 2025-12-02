<template>
  <h1 :class="myCondition ? 'highlight' : 'red'">HOLA</h1>
</template>

<script setup>
import { ref } from 'vue';
let myCondition = false
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