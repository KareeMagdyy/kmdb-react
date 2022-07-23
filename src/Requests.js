const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
// const IP_RE_KEY = process.env.REACT_APP_IP_REGISTRY_KEY;

// let locationData = {};

// export const getLocation = fetch(`https://api.ipregistry.co/?key=${IP_RE_KEY}`)
//   .then((res) => res.json())
//   .then((data) => (locationData = data));

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  playingNow: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  trendingDaily: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  // popularEG: `
  // https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=EG`,
  // playingNowEG: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=PL`,
};

export default requests;
