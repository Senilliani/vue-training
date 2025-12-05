<template>
    <HeaderComponent />
    <form @submit.prevent="handleSubmit" class="form">
        <label for="title">Title</label>
        <input v-model="movie.title" type="text" id="title">

        <label for="duration">Duration</label>
        <input v-model="movie.duration" type="text" id="duration">

        <label for="director">Director</label>
        <input v-model="movie.director" type="text" id="director">

        <button class="button">Send</button>
    </form>
</template>

<script setup>
import { reactive } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore()

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
    movieStore.addMovie({ ...movie }) // paso por valor para no modificar el original
}
</script>

<style scoped>
.form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
    margin: auto;
}

@media (min-width: 865px) {
    .form {
        max-width: 300px;
    }
}

.button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}
</style>