<template>
  <ChildComponent :message="text" :person="person"></ChildComponent>
  <ChildComponent :message="text"></ChildComponent>
</template>

<script setup>
import ChildComponent from './components/ChildComponent.vue';

const text = "desde el padre"
const person = {
  sex: "mujer",
  age: 30
}
</script>

<style scoped></style>