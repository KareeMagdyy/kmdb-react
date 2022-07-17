import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./UI/MovieCard";
import PlainRow from "./UI/PlainRow";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  const children = movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} img={movie.backdrop_path} />
  ));

  return <PlainRow title={title} rowId={rowId} children={children} />;
};

export default Row;
