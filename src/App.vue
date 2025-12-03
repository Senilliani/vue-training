<template>
  <h2>Watch</h2>
  <h3>Hola {{ userName }}</h3>
  <button @click="setName">Cambio de usuario</button>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const userName = ref("Mar") // esta es la variable que se quiere vigilar

const setName = computed(() => {
  return userName.value = "María"
})

watch(userName, (newValue, oldValue) => {
  console.log("username modified", newValue, oldValue)
}, { immediate: true })
</script>

<style scoped></style>