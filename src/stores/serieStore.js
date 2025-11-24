import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import SerieService from '@/services/serieService'

const serieService = new SerieService()

export const useSerieStore = defineStore('serieStore', () => {
  const state = reactive({
    series: [],
    currentSerie: {},
    topSeries: [],
  })

  const series = computed(() => state.series)
  const currentSerie = computed(() => state.currentSerie)
  const topSeries = computed(() => state.topSeries)

  const getSeries = async () => {
    state.series = await serieService.getSeries()
  }

  const getSerieDetail = async (id) => {
    state.currentSerie = await serieService.getSerieDetail(id)
  }

  const getTopSeries = async () => {
    state.topSeries = await serieService.getTopSeries()
  }

  return {
    series,
    topSeries,
    currentSerie,
    getSeries,
    getSerieDetail,
    getTopSeries,
  }
})
