<template>
    <h1>
        MOVIES
    </h1>
    <ul>
        <li v-for="movie in movies" :key="movie.title">
            <h2>{{ movie.title }}</h2>
            <p>duration: {{ movie.duration }}</p>
            <p>director: {{ movie.director }} </p>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';


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
    margin: 0px;
}

li {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 40px;
    margin: 10px 0;
}
</style>