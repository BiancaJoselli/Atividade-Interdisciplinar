<script setup>
import { onMounted } from 'vue'
import { useSerieStore } from '@/stores/serieStore'
import HeroSeries from '@/components/HeroSeries.vue'
import SeriesCarousel from '@/components/SeriesCarousel.vue'
import SeriesAnimation from '@/components/SeriesAnimation.vue'

const serieStore = useSerieStore()

onMounted(async () => {
  await serieStore.getSeries()
})
</script>

<template>
  <div class="series-container">
    <HeroSeries/>
    <SeriesCarousel/>
    <SeriesAnimation/>
  </div>
</template>

<style scoped>
.series-container {
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
}

.serie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.serie-card:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); 
  cursor: pointer;
}


.serie-card img {
  width: 100%;
  border-radius: 10px;
}

.serie-card p {
  color: white;
  margin-top: 0.5rem;
  font-size: 1rem;
}


</style>

