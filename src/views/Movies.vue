<template>
    <HeaderComponent />
    <h2>
        Movies
    </h2>
    <ul>
        <li v-for="movie in movies" :key="movie.title">
            <h3>{{ movie.title }}</h3>
            <p>Duration: {{ movie.duration }}</p>
            <p>Director: {{ movie.director }} </p>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const movies = ref([
    {
        title: "Inception", duration: "148 min", director: "BS"
    },
    {
        title: "Lord", duration: "169 min", director: "BS"
    }
])
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0px;
    margin: auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

li {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 40px;
    margin: 10px 0;
    max-width: fit-content;
}

h2 {
    text-align: center;
}
</style>