import axios from "axios";
import { useState, useEffect } from "react";
import RowSkeletonLoader from "./UI/RowSkeletonLoader";
import MovieCard from "./UI/MovieCard";
import PlainRow from "./UI/PlainRow";

const Row = ({ title, fetchURL, rowId, region = "" }) => {
  const [movies, setMovies] = useState([]);
  const [rowIsLoading, setRowIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(fetchURL + region)
      .then((res) => setMovies(res.data.results))
      .then(
        setTimeout(() => {
          setRowIsLoading(false);
        }, 2000)
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchURL, region]);

  const children = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      img={movie.backdrop_path}
      classes='rounded-md '
    />
  ));

  return (
    <>
      {rowIsLoading ? (
        <RowSkeletonLoader />
      ) : (
        <PlainRow title={title} rowId={rowId} children={children} />
      )}
      ;
    </>
  );
};

export default Row;
