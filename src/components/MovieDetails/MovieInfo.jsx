import React from "react";

const MovieInfo = ({ movieDetails, movieCastAndCrew }) => {
  const director = movieCastAndCrew.crew?.filter(
    (person) => person.job === "Director"
  );
  const writers = movieCastAndCrew.crew?.filter(
    (person) => person.department === "Writing"
  );

  return (
    <>
      <div className='text-white p-6 container mx-auto'>
        {/* Genre */}
        <div className=' flex flex-wrap  gap-3 '>
          {(movieDetails?.genres || []).map((genre, id) => (
            <p
              key={id}
              className='border-white border rounded-full px-5 py-2  
              '
            >
              {genre.name}
            </p>
          ))}
        </div>
        {/* overview */}
        <p className='py-4 lg:max-w-[75ch] font-semibold text-lg'>
          {movieDetails?.overview}
        </p>
        <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
        {/* Director */}
        <div className='py-4 lg:max-w-[75ch]  text-lg'>
          <span className='font-bold text-white mr-2'>Director:</span>
          {director?.map((e, id) => (
            <span key={id}>{e.name}</span>
          ))}
        </div>
        <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>

        <div className=' py-4 flex flex-col md:flex-row gap-3 lg:gap-10  lg:w-[60ch] overflow-hidden'>
          {/* Writer */}
          <div>
            <h2 className='font-bold text-2xl py-2'>Writers </h2>
            <div className='flex flex-col gap-1 text-left'>
              {writers?.map((writer, id) => (
                <div key={id}>
                  <span className='font-bold text-white mr-2'>
                    | {writer.job}:
                  </span>
                  <span>{writer.name}</span>
                </div>
              ))}
            </div>
          </div>
          <p className='bg-red-600 w-[90%] h-[1px] mt-4 md:mt-0 md:w-[1px] md:h-48 '></p>
          {/* Production Companies */}
          <div>
            <h2 className='font-bold text-2xl py-2'>Production </h2>
            <div className='flex flex-col gap-1 text-left'>
              {movieDetails["production_companies"]?.map((comp) => (
                <p key={comp.id}>{comp.name}</p>
              ))}
              {(movieDetails.budget > 0 || movieDetails.revenue > 0) && (
                <p className='bg-red-600 w-[25%]  h-[1px]'></p>
              )}
              {movieDetails.budget > 0 && (
                <p>
                  <span className='font-bold mr-2'>Budget:</span> $
                  {movieDetails.budget.toLocaleString()}
                </p>
              )}
              {movieDetails.revenue > 0 && (
                <p>
                  <span className='font-bold mr-2'>Revenue: </span>$
                  {movieDetails.revenue.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </div>
        <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
      </div>
    </>
  );
};

export default MovieInfo;
