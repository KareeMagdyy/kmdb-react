import React from "react";
import { Link } from "react-router-dom";

const MovieGenre = ({ movieDetails }) => {
  return (
    <div className=' flex flex-wrap  gap-3 '>
      {(movieDetails?.genres || []).map((genre) => (
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
