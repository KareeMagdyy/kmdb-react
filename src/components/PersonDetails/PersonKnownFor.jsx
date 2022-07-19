import PlainRow from "../UI/PlainRow";
import MovieCard from "../UI/MovieCard";
import { useEffect } from "react";

const PersonKnownFor = ({ castAsActor }) => {
  const highlightedMovies = castAsActor?.slice(0, 10);
  useEffect(() => {
    window?.scrollTo({ left: 0 });
  }, []);
  return (
    <div>
      <div className='text-black text-left max-w-[90%] mx-auto lg:max-w-[95%] lg:mx-0'>
        <PlainRow rowId='known-for' title='Known For'>
          {highlightedMovies?.map((movie) => (
            <MovieCard
              movie={movie}
              img={movie.poster_path}
              classes='max-w-[180px]  rounded-lg'
            />
          ))}
        </PlainRow>
      </div>
    </div>
  );
};

export default PersonKnownFor;
