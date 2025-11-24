<script setup>
import { ref, onMounted, watch } from "vue";
import api from "@/plugins/axios.js";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import TopCincoComponent from "@/components/TopCincoComponent.vue";

const movies = ref([]);
const filteredMovies = ref([]);
const searchTerm = ref("");

const imageBase = "https://image.tmdb.org/t/p/w500";
const marvelCompanies = "420|13252|19551|38679|2301";

async function fetchAllMarvelMovies() {
    let allMovies = [];
    let page = 1;
    let totalPages = 1;

    do {
        const response = await api.get(
            `/discover/movie?include_adult=false&include_video=false&language=pt-BR&sort_by=popularity.desc&with_companies=${marvelCompanies}&page=${page}`
        );

        allMovies.push(...response.data.results);
        totalPages = response.data.total_pages;
        page++;

    } while (page <= totalPages);

    return allMovies;
}

onMounted(async () => {
    const allMovies = await fetchAllMarvelMovies();
    movies.value = allMovies;
    filteredMovies.value = allMovies;
});

function updateSearch(term) {
    searchTerm.value = term;
}

watch(searchTerm, (value) => {
    if (!value) {
        filteredMovies.value = movies.value;
        return;
    }

    filteredMovies.value = movies.value.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase())
    );
});
</script>

<template>
    <div class="page">
        <HeaderComponent @search="updateSearch" />

        <HeroComponent />
        <TopCincoComponent />

        <div class="container">
            <h1>Filmes da Marvel</h1>

            <div class="movies">
                <div v-for="movie in filteredMovies" :key="movie.id" class="movie-card">
                    <img :src="imageBase + movie.poster_path" alt="Poster" />
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.release_date }}</p>
                    <button class="button-verMais">Ver mais</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.page {
    min-height: 100vh;
    background: #000;
    color: white;
}

.container {
    padding: 20px 40px;
}

h1 {
    margin: 20px 0;
}

.movies {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
}

.movie-card {
    background: #111;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.2s;
}

.movie-card:hover {
    transform: scale(1.05);
}

.movie-card img {
    width: 100%;
    border-radius: 8px;
}

.button-verMais {
    background: #c22727;
    color: white;
    border: none;
    width: 100%;
    padding: 8px 0;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: .2s;
}

.button-verMais:hover {
    background: #a32020;
}
</style>
