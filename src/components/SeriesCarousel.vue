<script setup>
import { onMounted } from 'vue'
import { useSerieStore } from '@/stores/serieStore'

const serieStore = useSerieStore()

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

onMounted(async () => {
  await serieStore.getSeries()
})
</script>

<template>
  <section>
    <swiper
      :modules="[Navigation]"
      :slides-per-view="3"
      :space-between="5"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide
        v-for="serie in serieStore.series"
        :key="serie.id"
      >
        <ul>
          <li>
            <img
              :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
              :alt="serie.title"
            />
          </li>
          <li>{{ serie.name }}</li>
          <li>{{ serie.first_air_date }}</li>
          <li>{{ serie.vote_average }}</li>
        </ul>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style scoped>
div {
  display: flex;
}

ul li {
  text-decoration: none;
  list-style: none;
  color: white;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgb(0, 0, 0);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 60vw;

}

:deep(.swiper-button-next) {
  right: 5vw;
}

:deep(.swiper-button-prev) {
  left: 10px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  top: 50%;
  transform: translateY(-50%);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background: rgba(255, 0, 0, 0.9);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}


</style>
