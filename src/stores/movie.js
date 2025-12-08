import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore(
  "movie",
  () => {
    const movies = ref([
      {
        title: "Inception",
        duration: "148 min",
        director: "BS",
      },
      {
        title: "Lord",
        duration: "169 min",
        director: "BS",
      },
    ]);

    const addMovie = (movie) => {
      movies.value.push(movie);
    };

    const getMovie = (movieTitle) => {
      return movies.value.find((movie) => movie.title === movieTitle);
    };

    return {
      movies,
      addMovie,
      getMovie,
    };
  },
  {
    persist: true,
  }
);
