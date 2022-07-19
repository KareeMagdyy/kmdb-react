const key = process.env.REACT_APP_IMDB_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  requestEGPopular: `
  https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1&region=EG`,
  requestEGNow: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1&region=EG`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestPlayingNow: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default requests;
