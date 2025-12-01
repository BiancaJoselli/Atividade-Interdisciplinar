<script setup>
import { defineProps, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import router from '@/router'

const movieStore = useMovieStore()

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
})

onMounted(async () => {
  await movieStore.getMovieDetail(props.movieId)
})
</script>

<template>
  <div>
    <button class="back" @click="router.push('/filmes')">&lt;</button>
    </div>
  <div class="main">

    <div>
      <img
        class="poster"
        :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
      />
    </div>
    <div class="content">
      <div class="details">
        <h1>{{ movieStore.currentMovie.title }}</h1>
        <div class="top">
          <p>{{ new Date(movieStore.currentMovie.release_date).getFullYear() }}</p>
          <p>⭐ {{ movieStore.currentMovie.vote_average }}</p>
        </div>
        <p v-if="movieStore.currentMovie.genres">
          <span v-for="genre in movieStore.currentMovie.genres" :key="genre.id" class="genre-chip">
            {{ genre.name }}
          </span>
        </p>
        <p id="sinopse">{{ movieStore.currentMovie.overview }}</p>
        </div>

        <h4>Produtoras</h4>
        <div class="companies">
          <template
            v-for="company in movieStore.currentMovie.production_companies"
            :key="company.id"
          >
            <img
              v-if="company.logo_path"
              :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
              :alt="company.name"
            />
            <p v-else>{{ company.name }}</p>
          </template>
        </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  background: transparent;
  border: solid 0.2vw;
  border-radius: 3vw;
  color: #e50914;
  font-size: 1.5vw;
  cursor: pointer;
  margin: 6vw 0 0 2vw;
  padding: 0.4vw 0.8vw;
}

.back:hover {
  opacity: 0.7;
}

.main {
  color: white;
  display: flex;
  margin: 0 2vw 2vw 2vw;
}

.poster {
  width: 20vw;
  height: 30vw;
  object-fit: cover;
  border-radius: 10px;
  margin: 2vw 0 0 4vw;
}

.details {
  margin: 0 0 0 10vw;
}


h1 {
  font-size: 3vw;
}

h4 {
  font-size: 1.2vw;
  margin: 2vw 0 0 10vw;

}

p {
  margin: 0 2vw 0 0;
}

#sinopse{
  margin: 2vw 0 0 0;
  padding: 0 20vw 0 0;

}
.top {
  display: flex;
  padding: 1vw 20vw 2vw 0;
}

span {
  border: solid 1px #e50914;
  border-radius: 12px;
  padding: 8px;
  margin: 0vw 1vw 1vw 0;
}


.companies {
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  align-items: center;
  margin-bottom: 2rem;
  margin: 2vw 0 0 10vw;
  color: white;
}
</style>
