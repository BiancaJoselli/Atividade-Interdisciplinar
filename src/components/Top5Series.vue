<script setup>
import { onMounted } from 'vue'
import { useSerieStore } from '@/stores/serieStore'
const serieStore = useSerieStore()

onMounted(async () => {
  await serieStore.getTopSeries()
})
</script>

<template>
  <section class="top5">
    <h2>Top 5 séries hoje</h2>

    <div class="top5-container">
      <div
        class="card"
        v-for="serie in serieStore.topSeries"
        :key="serie.id"
      >
        <RouterLink :to="`/serie/${serie.id}`">
          <div class="card-img-wrapper">
            <img :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`" />
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 0 2vw;
}

h2 {
  color: white;
  font-size: 2.5vw;
  padding: 2vw 0;
}

/* container horizontal */
.top5-container {
  display: flex;
  gap: 1.5vw;
}

/* card igual ao outro carrossel */
.card {
  position: relative;
  width: 20vw;       /* mesmo tamanho */
  height: 30vw;      /* igual ao outro carrossel */
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.card-img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease;
}

/* Hover igual ao outro carrossel */
.card:hover {
  transform: scale(1.05);
  z-index: 20;
}

.card:hover img {
  transform: scale(1.12);
}
</style>
