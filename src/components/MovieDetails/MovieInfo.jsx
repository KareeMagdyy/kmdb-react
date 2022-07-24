import MovieGenre from "./MovieInfo/MovieGenre";
import MovieOverview from "./MovieInfo/MovieOverview";
import MovieWebsite from "./MovieInfo/MovieWebsite";
import MovieWritersProduction from "./MovieInfo/MovieWritersProduction";

const MovieInfo = ({ movieDetails, movieCastAndCrew, loading }) => {
  return (
    <>
      <div className='text-white p-6 container mx-auto'>
        <MovieGenre movieDetails={movieDetails} loading={loading} />
        <MovieOverview
          movieDetails={movieDetails}
          movieCastAndCrew={movieCastAndCrew}
          loading={loading}
        />
        {!loading && (
          <MovieWritersProduction
            movieDetails={movieDetails}
            movieCastAndCrew={movieCastAndCrew}
          />
        )}
        {!loading && <MovieWebsite movieDetails={movieDetails} />}
      </div>
    </>
  );
};

export default MovieInfo;
