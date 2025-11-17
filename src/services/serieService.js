import api from "@/plugins/axios";

export default class SerieService {
  async getSeries() {
      const response = await api.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_companies=420|13252|19551|38679|2301');
      return response.data.results
    }

}

