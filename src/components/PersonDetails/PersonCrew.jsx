import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const PersonCrew = ({ filmography }) => {
  const sortedFilmography = filmography?.crew?.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  const truncateString = (str, num) => {
    return str?.length > num ? `${str?.slice(0, num)}...` : str;
  };
  const movieDate = (date) => new Date(date).getFullYear();

  return (
    <div>
      <div className='py-4'>
        <h2 className='pt-2 text-2xl font-bold '>Crew</h2>
        <div className='bg-red-600  w-[25px] h-[2px] mb-5'></div>
        {sortedFilmography?.map(
          (movie) =>
            movie.release_date !== "" && (
              <div
                key={uuid()}
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
                  {movie?.job && (
                    <p className='text-gray-400'>
                      as {truncateString(movie?.job, 40)}
                    </p>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PersonCrew;
