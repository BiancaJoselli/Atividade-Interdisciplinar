import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import MovieService from '@/services/movieService';

export const useMovieStore = defineStore('genre', () => {
  const state = reactive({
    movies: [{
      title: ''
    }],
  });

  const movies = computed(() => state.movies)

  const getMovies = async () => {
    const movieService = new MovieService()
    state.movies = await movieService.getMovies()
  }


  return { movies, getMovies};
});
