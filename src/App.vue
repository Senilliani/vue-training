<template>
  <HeaderComponent></HeaderComponent>
  <h1>HOLA</h1>
  <h2 @click="addOne">{{ number }}</h2>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue'

const number = ref(0);

const addOne = () => {
  number.value++
}

</script>

<style scoped></style>