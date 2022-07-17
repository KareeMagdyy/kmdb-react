import React from "react";
import MovieCard from "../UI/MovieCard";
import PlainRow from "../UI/PlainRow";

const RecommendedMovies = ({ moviesRecommended }) => {
  const children = moviesRecommended.map((movie) => (
    <MovieCard key={movie.id} movie={movie} img={movie.poster_path} />
  ));

  return (
    <PlainRow
      title='More like this'
      rowID='recommended'
      children={children}
      classes='p-6'
    />
  );
};

export default RecommendedMovies;
