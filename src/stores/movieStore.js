import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import MovieService from '@/services/movieService'
const movieService = new MovieService()



export const useMovieStore = defineStore('movie', () => {
    const state = reactive({
    currentMovie: {},
    movies: [],
    })

    const movies = computed(() => state.movies)
    const currentMovie = computed(() => state.currentMovie)

    const clearMovies = () => {
    state.movies = []
    }

    const getMovieDetail = async (id) => {
      state.currentMovie = await movieService.getMovieDetail(id)
    }

    const listMovies = async () => {
      state.movies = await movieService.getMovies() // CORRIGIDO
    }


    return { currentMovie, getMovieDetail, movies, clearMovies, listMovies }
})
