import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import MovieService from '@/services/movieService'
const movieService = new MovieService()

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
    movies: [],
    topMovies: [],   // <-- ADICIONADO
  })

  const movies = computed(() => state.movies)
  const currentMovie = computed(() => state.currentMovie)
  const topMovies = computed(() => state.topMovies)

  const clearMovies = () => {
    state.movies = []
  }

  const getMovieDetail = async (id) => {
    state.currentMovie = await movieService.getMovieDetail(id)
  }

  const listMovies = async () => {
    state.movies = await movieService.getMovies() // CORRIGIDO
  }

  const getTopMovies = async () => {
    state.topMovies = await movieService.getTopMovies()
  }

  return { currentMovie, getMovieDetail, movies, topMovies, clearMovies, listMovies, getTopMovies }
})
