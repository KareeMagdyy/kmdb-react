import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieHero from "../components/MovieDetails/MovieHero";
import MovieInfo from "../components/MovieDetails/MovieInfo";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCastAndCrew, setMovieCastAndCrew] = useState({});
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

  useEffect(() => {
    getMovieDetails(params.id);
    getMovieVideos(params.id);
    getCastAndCrew(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      <MovieHero movieDetails={movieDetails} movieVideos={movieVideos} />
      <MovieInfo
        movieDetails={movieDetails}
        movieCastAndCrew={movieCastAndCrew}
      />
    </>
  );
};

export default MovieDetails;
