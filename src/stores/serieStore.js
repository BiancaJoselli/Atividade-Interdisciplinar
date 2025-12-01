import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import SerieService from '@/services/serieService'

const serieService = new SerieService()

export const useSerieStore = defineStore('serieStore', () => {
  const state = reactive({
    series: [],
    currentSerie: {},
    topSeries: [],
    animationSeries: [],
  })

  const series = computed(() => state.series)
  const currentSerie = computed(() => state.currentSerie)
  const topSeries = computed(() => state.topSeries)
  const animationSeries = computed(() => state.animationSeries)


  const getSeries = async () => {
    state.series = await serieService.getSeries()
  }

  const getSerieDetail = async (id) => {
    state.currentSerie = await serieService.getSerieDetail(id)
  }

  const getTopSeries = async () => {
    state.topSeries = await serieService.getTopSeries()
  }

  const getAnimationSeries = async () => {
    state.animationSeries = await serieService.getAnimationSeries()
  }


  return {
    series,
    topSeries,
    currentSerie,
    animationSeries, 
    getSeries,
    getSerieDetail,
    getTopSeries,
    getAnimationSeries,
  }
})
