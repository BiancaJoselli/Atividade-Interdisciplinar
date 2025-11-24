import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/filmes',
    name: 'Movies',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/tv',
    name: 'TV',
    component: () => import('../views/SeriesView.vue'),
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetails',
    component: () => import('../views/MovieDetailsView.vue'),
    props: route => ({ movieId: Number(route.params.movieId) }),
  },
  {
    path: '/serie/:serieId',
    name: 'SerieDetails',
    component: () => import('../views/SerieDetailsView.vue'),
    props: route => ({ serieId: Number(route.params.serieId) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
