<script setup>
import { onMounted } from 'vue'
import { useSerieStore } from '@/stores/serieStore'
import HeroSeries from '@/components/HeroSeries.vue'

const serieStore = useSerieStore()

onMounted(async () => {
  await serieStore.getSeries()
})
</script>

<template>
  <div class="series-container">
    <HeroSeries/>
    <div class="grid">
      <router-link
        v-for="serie in serieStore.series"
        :key="serie.id"
        :to="`/serie/${serie.id}`"
        class="serie-card"
      >
        <div>
          <img :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`" :alt="serie.title" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.series-container {
  padding: 2rem;
}

/* GRID COM 4 COLUNAS FIXAS */
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 4 colunas */
  gap: 2rem; /* espaçamento entre eles */
}

/* Card de cada filme */
.serie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* animação suave */
}

.serie-card:hover {
  transform: scale(1.08); /* aumenta o card */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* sombra bonita */
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

