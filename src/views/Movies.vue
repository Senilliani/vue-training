<template>
    <HeaderComponent />
    <h2>
        Movies
    </h2>
    <ul>
        <li v-for="movie in movieStore.movies" :key="movie.title">
            <h3>
                <router-link :to="{ name: 'movieDetails', params: { movieTitle: movie.title } }">
                    {{ movie.title }}
                </router-link>
            </h3>
            <p>Duration: {{ movie.duration }}</p>
            <p>Director: {{ movie.director }} </p>
        </li>
    </ul>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore()

onMounted(() => {
    console.log("se ha montado el componente")
})

onUnmounted(() => {
    console.log("componente desmontado")
})
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