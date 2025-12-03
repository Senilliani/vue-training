<template>
  <h2>Componente padre</h2>
  <ChildComponent>
    <template v-slot:top>
      <p>Slot con nombre 'top'. Necesita de la etiqueta template.</p>
    </template>
  </ChildComponent>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

</script>

<style scoped></style>