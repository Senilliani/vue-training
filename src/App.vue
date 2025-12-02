<template>
  <div>
    <p v-for="(movie, i) in movies" :key="movie">
      {{ i + 1 }} - {{ movie }}
    </p>
  </div>
  <ul>
    <li v-for="animal in animals" :key="animal.id">
      {{ animal.name }}
      <img :src="animal.img" alt="" width="200px">
    </li>
  </ul>
</template>

<script setup>
const movies = ["Lord", "Star", "Dune"]
const animals = [
  {
    id: 1,
    name: "dog",
    img: "https://cdn.pixabay.com/photo/2025/11/28/15/29/zebras-9983175_1280.jpg",
  },
  {
    id: 2,
    name: "cat",
    img: "https://cdn.pixabay.com/photo/2025/11/28/15/29/zebras-9983175_1280.jpg",
  },
  {
    id: 3,
    name: "pig",
    img: "https://cdn.pixabay.com/photo/2025/11/28/15/29/zebras-9983175_1280.jpg",
  },
];
</script>

<style scoped></style>