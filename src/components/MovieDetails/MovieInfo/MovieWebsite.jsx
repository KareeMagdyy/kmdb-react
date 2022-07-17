import React from "react";

const MovieWebsite = ({ movieDetails }) => {
  const truncateString = (str, n) => {
    return str.length > n ? `${str.slice(0, n)}...` : str;
  };
  return (
    <>
      {movieDetails.homepage && (
        <div>
          <div className='py-4'>
            <p className='font-bold mr-2 md:inline-block'>Official Website:</p>
            <a
              href={movieDetails.homepage}
              className='hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              {truncateString(movieDetails.homepage, 32)}
            </a>
          </div>
          <p className='bg-red-600 w-[90%] lg:w-[80ch] h-[1px]'></p>
        </div>
      )}
    </>
  );
};

export default MovieWebsite;
