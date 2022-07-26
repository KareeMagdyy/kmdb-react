import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const MovieGenre = ({ movieDetails, loading }) => {
  return (
    <div className=' flex flex-wrap  gap-3 '>
      {loading
        ? Array(2)
            .fill(0)
            .map((_, id) => (
              <div key={id} className='w-[100px] '>
                <Skeleton height={30} />
              </div>
            ))
        : (movieDetails?.genres || []).map((genre) => (
            <Link to={`/movieGenre/${genre.name},${genre.id}`} key={genre.id}>
              <p
                className='border-white border rounded-full px-5 py-2 hover:bg-slate-800 transition-all 
              '
              >
                {genre.name}
              </p>
            </Link>
          ))}
    </div>
  );
};

export default MovieGenre;
