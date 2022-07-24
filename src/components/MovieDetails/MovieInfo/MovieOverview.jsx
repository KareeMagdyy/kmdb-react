import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const MovieOverview = ({ movieDetails, movieCastAndCrew, loading }) => {
  const director = movieCastAndCrew.crew?.filter(
    (person) => person.job === "Director"
  );
  return (
    <>
      <div className='py-4 lg:max-w-[75ch] text-lg'>
        {loading ? (
          <Skeleton count={4} />
        ) : (
          <p className=' font-semibold '>{movieDetails?.overview}</p>
        )}

        <p className='py-4'>
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <span className='font-semibold'>Country: </span>
              {movieDetails["production_countries"]?.map((country, idx) => (
                <span key={uuid()}>
                  {country.name}
                  {idx === movieDetails["production_countries"]?.length - 1
                    ? ""
                    : ", "}
                </span>
              ))}
            </>
          )}
        </p>
        <p className='pb-3'>
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <span className='font-semibold'>Language: </span>
              {movieDetails["spoken_languages"]?.map((lang, idx) => (
                <span key={uuid()}>
                  {lang.english_name}
                  {idx === movieDetails["spoken_languages"]?.length - 1
                    ? ""
                    : ", "}
                </span>
              ))}
            </>
          )}
        </p>
      </div>
      <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
      {director?.length > 0 && (
        <div className={loading ? "hidden" : "block"}>
          <div className='py-4 lg:max-w-[75ch]  text-lg'>
            <span className='font-bold text-white mr-2'>Director:</span>
            {director?.map((e, idx) => (
              <Link key={uuid()} to={`/person/${e.id}`}>
                <span className='hover:underline hover:text-gray-400'>
                  {e.name}
                  {idx === director?.length - 1 ? "" : ",  "}
                </span>
              </Link>
            ))}
          </div>
          <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
        </div>
      )}
    </>
  );
};

export default MovieOverview;
