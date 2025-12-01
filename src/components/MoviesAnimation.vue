<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const movieStore = useMovieStore()

onMounted(async () => {
    await movieStore.listMovies()
    movieStore.filterAnimationMovies()
})
</script>

<template>
    <section class="animation-section">
        <h2>Animações</h2>

        <swiper :modules="[Navigation]" :slides-per-view="5" :space-between="10" :navigation="true" class="mySwiper">
            <swiper-slide v-for="movie in movieStore.animationMovies" :key="movie.id">
                <router-link :to="`/movie/${movie.id}`">
                    <div class="card">
                        <div class="card-img-wrapper">
                            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
        </swiper>
    </section>
</template>

<style scoped>
.animation-section {
    margin: 2vw;
}

h2 {
    color: white;
    font-size: 2.5vw;
    padding: 1vw 0;
}

.card {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.4s ease;
}

.card-img-wrapper {
    border-radius: 12px;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    z-index: 10;
}

.card:hover img {
    transform: scale(1.12);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: #fff;
    background: rgba(255, 0, 0, 0.8);
    padding: 10px;
    border-radius: 50%;
    transition: 0.3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
    background: rgba(255, 0, 0, 0.95);
}


:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}
</style>
