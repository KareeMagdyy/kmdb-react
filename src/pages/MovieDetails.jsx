import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieHero from "../components/MovieDetails/MovieHero";
import MovieInfo from "../components/MovieDetails/MovieInfo";
import MovieCast from "../components/MovieDetails/MovieCast";
import MovieVids from "../components/MovieDetails/MovieVids";
import RecommendedMovies from "../components/MovieDetails/RecommendedMovies";
import BlockAdultContent from "../components/UI/BlockAdultContent";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCastAndCrew, setMovieCastAndCrew] = useState({});
  const [moviesRecommended, setMoviesRecommended] = useState([]);
  const params = useParams();
  const key = process.env.REACT_APP_IMDB_API_KEY;

  const getMovieDetails = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((res) => setMovieDetails(res.data));
  };
  const getMovieVideos = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
      )
      .then((res) => setMovieVideos(res.data.results));
  };
  const getCastAndCrew = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
      )
      .then((res) => setMovieCastAndCrew(res.data));
  };
  const getRecommended = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&include_adult=false&page=1`
      )
      .then((res) => setMoviesRecommended(res.data.results));
  };

  useEffect(() => {
    getMovieDetails(params.id);
    getMovieVideos(params.id);
    setTimeout(() => {
      getCastAndCrew(params.id);
    }, 1000);
    setTimeout(() => {
      getRecommended(params.id);
    }, 3000);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      {!movieDetails.adult ? (
        <>
          <MovieHero movieDetails={movieDetails} movieVideos={movieVideos} />
          <MovieInfo
            movieDetails={movieDetails}
            movieCastAndCrew={movieCastAndCrew}
          />
          <MovieVids movieVideos={movieVideos} />
          <MovieCast movieCastAndCrew={movieCastAndCrew} />
          <RecommendedMovies moviesRecommended={moviesRecommended} />
        </>
      ) : (
        <BlockAdultContent />
      )}
    </>
  );
};

export default MovieDetails;
