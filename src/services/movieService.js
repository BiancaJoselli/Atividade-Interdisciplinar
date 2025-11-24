import api from "@/plugins/axios";

export default class MovieService {

  async getMovies() {
      const response = await api.get(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&with_companies=420&sort_by=release_date.asc'
      );
      return response.data.results
    }

    async getMovieDetail(id) {
      const response = await api.get(
        `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`
      );
      return response.data;
    }

    async getTopMovies() {
      const response = await api.get(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_companies=420|13252|19551|38679|2301'
      );
      return response.data.results.slice(0, 5);

    }

}

