import MovieGenre from "./MovieInfo/MovieGenre";
import MovieOverview from "./MovieInfo/MovieOverview";
import MovieWebsite from "./MovieInfo/MovieWebsite";
import MovieWritersProduction from "./MovieInfo/MovieWritersProduction";

const MovieInfo = ({ movieDetails, movieCastAndCrew }) => {
  return (
    <>
      <div className='text-white p-6 container mx-auto'>
        <MovieGenre movieDetails={movieDetails} />
        <MovieOverview
          movieDetails={movieDetails}
          movieCastAndCrew={movieCastAndCrew}
        />
        <MovieWritersProduction
          movieDetails={movieDetails}
          movieCastAndCrew={movieCastAndCrew}
        />
        <MovieWebsite movieDetails={movieDetails} />
      </div>
    </>
  );
};

export default MovieInfo;
