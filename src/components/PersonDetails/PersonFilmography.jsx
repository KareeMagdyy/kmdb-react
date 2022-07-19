import React from "react";
import { Link } from "react-router-dom";

const PersonFilmography = ({ filmography }) => {
  const truncateString = (str, num) => {
    return str?.length > num ? `${str?.slice(0, num)}...` : str;
  };
  const movieDate = (date) => new Date(date).getFullYear();

  return (
    <section className=' py-5 w-[85%] mt-2 mx-auto lg:mx-0'>
      <h2 className='text-2xl font-bold py-2 '>Filmography</h2>
      <div className='bg-red-600  w-[50px] h-[2px] mb-5'></div>
      <div className='py-4'>
        {filmography?.map(
          (movie) =>
            movie.release_date !== "" && (
              <div
                key={movie.id}
                className='relative before:absolute before:bg-red-600 before:h-[20px] before:w-[2px] py-3'
              >
                <div className='flex flex-col ml-2 leading-[20px] gap-1 '>
                  <p className=''>
                    {movie?.release_date?.length > 0
                      ? movieDate(movie?.release_date)
                      : "—"}
                  </p>
                  <Link to={`/movie/${movie.id}`}>
                    <h2 className='font-bold cursor-pointer hover:underline'>
                      {truncateString(movie?.title, 40)}
                    </h2>
                  </Link>
                  {(movie?.character || movie?.job) && (
                    <p className='text-gray-400'>
                      as {truncateString(movie?.character || movie?.job, 40)}
                    </p>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default PersonFilmography;
