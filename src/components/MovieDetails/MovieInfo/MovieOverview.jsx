import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const MovieOverview = ({ movieDetails, movieCastAndCrew }) => {
  const director = movieCastAndCrew.crew?.filter(
    (person) => person.job === "Director"
  );
  return (
    <>
      <div className='py-4 lg:max-w-[75ch] text-lg'>
        <p className=' font-semibold '>{movieDetails?.overview}</p>
        <p className='py-4'>
          <span className='font-semibold'>Country: </span>
          {movieDetails["production_countries"]?.map((country, idx) => (
            <span key={uuid()}>
              {country.name}
              {idx === movieDetails["production_countries"]?.length - 1
                ? ""
                : ", "}
            </span>
          ))}
        </p>
        <p className='pb-3'>
          <span className='font-semibold'>Language: </span>
          {movieDetails["spoken_languages"]?.map((lang, idx) => (
            <span key={uuid()}>
              {lang.english_name}
              {idx === movieDetails["spoken_languages"]?.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
      </div>
      <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
      {director?.length > 0 && (
        <>
          <div className='py-4 lg:max-w-[75ch]  text-lg'>
            <span className='font-bold text-white mr-2'>Director:</span>
            {director?.map((e, id) => (
              <Link to={`/person/${e.id}`}>
                <span
                  key={uuid()}
                  className='hover:underline hover:text-gray-400'
                >
                  {e.name}
                </span>
              </Link>
            ))}
          </div>
          <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
        </>
      )}
    </>
  );
};

export default MovieOverview;
