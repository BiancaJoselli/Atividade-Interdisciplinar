import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ5ZjRkZjQzMjJhMDg1YTY3ZDRlYmY0MTJjMTE3YSIsIm5iZiI6MTc1OTQwNTUyMS42NjYsInN1YiI6IjY4ZGU2NWQxYmMwN2QxZTg4ZWNhNDU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QGUDaLEIXJFWcoUXELhLMW65NudlWX4k2AzutCBD4fA"
  }
});

export default api;
