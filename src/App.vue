<template>
  <h2>Watch</h2>
  <h3>Hola {{ userName }}</h3>
  <button @click="setName">Cambio de usuario</button>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';

const userName = ref("Mar") // esta es la variable que se quiere vigilar

const setName = computed(() => {
  return userName.value = "María"
})

// diferencia con el watch es que no se necesita pasar la variable como primer parámetro y que siempre es immediate
watchEffect(() => {
  console.log("variable que estoy vigilando:", userName.value)
})
</script>

<style scoped></style>