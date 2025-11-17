import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import SerieService from '@/services/serieService'

export const useSerieStore = defineStore('serie', () => {
  const state = reactive({
    series: [{
      name: ''
    }],
  })

  const series = computed(() => state.series)

  const getSeries = async () => {
    const serieService = new SerieService()
    state.series = await serieService.getSeries()
  }

  return { series, getSeries }
})
