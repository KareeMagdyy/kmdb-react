import PlainRow from "../UI/PlainRow";
import MovieCard from "../UI/MovieCard";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";

const PersonKnownFor = ({ castAsActor, loading }) => {
  const highlightedMovies = castAsActor?.slice(0, 10);
  useEffect(() => {
    window?.scrollTo({ left: 0 });
  }, []);
  return (
    <>
      {highlightedMovies?.length > 0 && (
        <div className='text-black text-left max-w-[90%] mx-auto lg:max-w-[95%] lg:mx-0'>
          {loading ? (
            <div className='flex overflow-x-scroll scrollbar-hide gap-3'>
              {Array(4)
                .fill(0)
                .map((_, id) => (
                  <Skeleton key={id} width={175} height={250} />
                ))}
            </div>
          ) : (
            <PlainRow rowId='known-for' title='Known For'>
              {highlightedMovies?.map((movie) => (
                <MovieCard
                  movie={movie}
                  img={movie.poster_path}
                  classes='max-w-[180px]  rounded-lg'
                  key={movie.id}
                />
              ))}
            </PlainRow>
          )}
        </div>
      )}
    </>
  );
};

export default PersonKnownFor;
