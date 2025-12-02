<template>
  <div>
    <p v-for="(movie, i) in movies" :key="movie">
      {{ i + 1 }} - {{ movie }}
    </p>
  </div>
</template>

<script setup>
const movies = ["Lord", "Star", "Dune"]
</script>

<style scoped></style>