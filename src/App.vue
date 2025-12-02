<template>
  <h2>Hola {{ displayName }} desde el padre</h2>
  <ChildComponent @login="setName"></ChildComponent>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const displayName = ref("")

const setName = (e) => {
  displayName.value = e;
}
</script>

<style scoped></style>