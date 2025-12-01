<script setup>
import HeroSection from '@/components/HeroSection.vue'
import MoviesCarousel from '@/components/MoviesCarousel.vue'
import SeriesCarousel from '@/components/SeriesCarousel.vue'
import Top5Movies from '@/components/Top5Movies.vue'
import Top5Series from '@/components/Top5Series.vue'
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import { useSerieStore } from '@/stores/serieStore'

const movieStore = useMovieStore()
const serieStore = useSerieStore()

onMounted(() => {
  movieStore.listMovies()
  serieStore.getTopSeries()
})
</script>

<template>
    <HeroSection />
    <Top5Movies />
    <MoviesCarousel :movies="movieStore.movies" />
    <Top5Series />
    <SeriesCarousel :series="serieStore.series" />
</template>
