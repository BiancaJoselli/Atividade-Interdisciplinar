<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios.js";

const top5 = ref([]);

const marvelCompanies = "420|13252|19551|38679|2301";
const imageBase = "https://image.tmdb.org/t/p/w500";

onMounted(async () => {
    const response = await api.get(
        `/discover/movie?include_adult=false&include_video=false&language=pt-BR&sort_by=popularity.desc&with_companies=${marvelCompanies}`
    );

    top5.value = response.data.results.slice(0, 5);
});
</script>

<template>
    <div class="top5-container">
        <h2 class="title">Top 5 Filmes Mais Acessados</h2>

        <div class="cards">
            <div v-for="(movie, index) in top5" :key="movie.id" class="card">
                <span class="ranking">{{ index + 1 }}</span>

                <img :src="imageBase + movie.poster_path" class="poster" />

                <div class="info">
                    <div class="header-info">
                        <span class="tag">FILME</span>
                        <span class="year">
                            <i class="fa-regular fa-calendar"></i>
                            {{ movie.release_date?.slice(0, 4) }}
                        </span>

                        <span class="rating">
                            <i class="fa-solid fa-star"></i>
                            {{ movie.vote_average.toFixed(1) }}
                        </span>
                    </div>

                    <h3 class="movie-title">{{ movie.title }}</h3>

                    <p class="overview">
                        {{ movie.overview }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top5-container {
    padding: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.title {
    color: white;
    font-size: 26px;
    margin-bottom: 20px;
}

.cards {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 12px;
}

.card {
    background: #1a1a1a;
    border-radius: 14px;
    width: 260px;
    overflow: hidden;
    position: relative;
    color: white;
    border: 1px solid #333;
    transition: transform 0.25s ease-in-out;
}

.card:hover {
    transform: scale(1.04);
}

.ranking {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #d32f2f;
    padding: 4px 10px;
    border-radius: 50px;
    font-weight: bold;
    color: white;
    z-index: 2;
}

.poster {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

.info {
    padding: 14px;
}

.header-info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.tag {
    background: #b71c1c;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.year {
    font-size: 12px;
    color: #ccc;
    display: flex;
    align-items: center;
    gap: 4px;
}

.rating {
    margin-left: auto;
    background: #222;
    padding: 4px 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ff4757;
    font-weight: bold;
}

.movie-title {
    font-size: 16px;
    margin-bottom: 8px;
}

.overview {
    font-size: 13px;
    color: #ccc;
    height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

