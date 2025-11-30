import api from "@/plugins/axios";

export default class SerieService {

  async getSeries() {
    const response = await api.get(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&with_companies=420&first_air_date.gte=1900-01-01&first_air_date.lte=2030-01-01&sort_by=first_air_date.asc&without_genres=16'

    );
    return response.data.results;
  }

  async getSerieDetail(id) {
    const response = await api.get(
      `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`
    );
    return response.data;
  }

  async getTopSeries() {
    const response = await api.get(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_companies=420|13252|19551|38679|2301'
    );
    return response.data.results.slice(0, 5);

  }

  async getAnimationSeries() {
    const response = await api.get(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&with_companies=420&with_genres=16&first_air_date.gte=1900-01-01&first_air_date.lte=2030-01-01&sort_by=first_air_date.asc'
    );
    return response.data.results;
  }
}
