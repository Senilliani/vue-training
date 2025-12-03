<template>
  <h1>Formularios</h1>
  <form @submit.prevent="handleSubmit" class="form">
    <label for="title">Título</label>
    <input v-model="movie.title" type="text" id="title">

    <label for="duration">Duración</label>
    <input v-model="movie.duration" type="text" id="duration">

    <label for="director">Directora</label>
    <input v-model="movie.director" type="text" id="director">

    <button>Enviar</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const movie = reactive({
  title: "",
  duration: 0,
  director: ""
})

const handleSubmit = () => {
  if (!movie.title) {
    alert("Debe tener al menos el título")
    return
  }
  console.log("datos de la película: ", movie)
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>