<script setup>
import HeroSection from '@/components/HeroSection.vue'
import MoviesCarousel from '@/components/MoviesCarousel.vue';
import SeriesCarousel from '@/components/SeriesCarousel.vue';
import Top5Movies from '@/components/Top5Movies.vue';
import Top5Series from '@/components/Top5Series.vue';

</script>

<template>
    <HeroSection />
    <Top5Movies/>
    <MoviesCarousel/>
    <Top5Series/>
    <SeriesCarousel/>
</template>
