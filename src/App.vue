<template>
  <h2>Componente padre</h2>
  <p>Pasa la información a través de slot al hijo</p>
  <ChildComponent>
    <h3>
      desde el padre: al agregar contenido dentro de la etiqueta del hijo
    </h3>
  </ChildComponent>
  <ChildComponent>
    <h3>desde el padre: Lorem, ipsum dolor.</h3>
  </ChildComponent>
  <ChildComponent></ChildComponent>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

</script>

<style scoped></style>