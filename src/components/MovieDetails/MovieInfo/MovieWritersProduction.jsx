import React from "react";

const MovieWritersProduction = ({ movieDetails, movieCastAndCrew }) => {
  const writers = movieCastAndCrew.crew?.filter(
    (person) => person.department === "Writing"
  );
  const limitWriters = writers?.slice(0, 6);
  const screenSize = window.screen.width;

  return (
    <>
      {(writers?.length > 0 || movieDetails["production_companies"] > 0) && (
        <>
          <div
            className={`py-4 flex flex-col md:flex-row md:justify-between  gap-3 lg:gap-10  md:max-w-[65ch] lg:max-w-[70ch]   overflow-hidden ${
              movieDetails["production_companies"].length !== 0
                ? "md:text-center"
                : ""
            }`}
          >
            {/* Writer */}
            <div>
              <h2 className='font-bold text-2xl py-2'>
                {writers?.length > 6 ? "Top Writers" : "Writers"}{" "}
              </h2>
              <div className='flex flex-col gap-1 text-left'>
                {limitWriters?.map((writer, id) => (
                  <div key={id}>
                    <span className='font-bold text-white mr-2'>
                      | {writer.job}:
                    </span>
                    <span>{writer.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Production Companies */}
            {movieDetails["production_companies"].length > 0 && (
              <>
                <p className='bg-red-600 w-[90%] h-[1px] mt-4 md:mt-0 md:w-[1px] md:h-52 '></p>
                <div>
                  <h2 className='font-bold text-2xl py-2'>Production </h2>
                  <div className='flex flex-col gap-1 '>
                    {movieDetails["production_companies"]?.map((comp) => (
                      <p key={comp.id}>{comp.name}</p>
                    ))}
                    {(movieDetails.budget > 0 || movieDetails.revenue > 0) && (
                      <p
                        className={`bg-red-600 w-[25%]  h-[1px] mt-4  ${
                          screenSize > 767 && "mx-auto"
                        }`}
                      ></p>
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
              </>
            )}
          </div>
          <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
          {/* Movie WebSite */}
        </>
      )}
    </>
  );
};

export default MovieWritersProduction;
