<script setup>
import { onMounted} from 'vue'
import { useSerieStore } from "@/stores/serieStore"

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import router from '@/router'

const serieStore = useSerieStore()

onMounted(async () => {
  await serieStore.getTopSeries()
})
</script>


<template>
  <section class="hero-container">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      effect="fade"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :loop="true"
      class="hero-swiper"
    >
      <SwiperSlide v-for="serie in serieStore.topSeries" :key="serie.id">
        <div
          class="hero"
          :style="{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(https://image.tmdb.org/t/p/original${serie.poster_path})`
          }"
        >
          <div class="info">
            <h2>{{serie.name }}</h2>
            <p>{{ serie.overview }}</p>
            <button
              class="btn"
              @click="router.push({ name: 'SerieDetails', params: { serieId: serie.id } })"
              >
              Ver detalhes
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>


<style scoped>
.hero-container {
  height: 90vh;
  margin: 4vw 0 3vw 0;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

.hero-swiper,
.swiper-slide {
  height: 90vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 90%;
  height: 100%;
  overflow: hidden;
}

.hero {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 30%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding-left: 4%;
  color: white;
  box-sizing: border-box;
}

.info {
  max-width: 600px;
  z-index: 5;
  animation: fadeIn 0.9s ease;
}

h2 {
  font-size: 3.5vw;
}

p {
  font-size: 1.1rem;
  color: #ddd;
  margin-bottom: 1.4rem;
  line-height: 1.4;
}

.btn {
  background: #e62429;
  padding: 12px 26px;
  border-radius: 6px;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.05rem;
  cursor: pointer;
  font-weight: 900;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
