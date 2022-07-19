import React from "react";
import MovieCard from "../UI/MovieCard";
import PlainRow from "../UI/PlainRow";

const RecommendedMovies = ({ moviesRecommended }) => {
  const children = moviesRecommended.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      img={movie.poster_path}
      classes='max-w-[250px] rounded-md'
    />
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
