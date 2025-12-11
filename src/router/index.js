import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import CreateMovie from "../views/CreateMovie.vue";
import MovieDetails from "../views/MovieDetails.vue";
import Notes from "../views/Notes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies,
    },
    {
      path: "/movies/:movieTitle",
      name: "movieDetails",
      component: MovieDetails,
    },
    {
      path: "/create",
      name: "create",
      component: CreateMovie,
    },
    {
      path: "/notes",
      name: "notes",
      component: Notes,
    },
  ],
});

export default router;
