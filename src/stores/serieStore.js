import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import SerieService from '@/services/serieService'

export const useSerieStore = defineStore('serieStore', () => {
  const state = reactive({
    series: [],
    currentSerie: {}  
  })

  const series = computed(() => state.series)
  const currentSerie = computed(() => state.currentSerie)

  const getSeries = async () => {
    const serieService = new SerieService()
    state.series = await serieService.getSeries()
  }

  const getSerieDetail = async (id) => {
    const serieService = new SerieService()
    state.currentSerie = await serieService.getSerieDetail(id)
  }

  return {
    series,
    currentSerie,
    getSeries,
    getSerieDetail
  }
})
