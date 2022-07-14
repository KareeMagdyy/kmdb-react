import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeClickHandler = () => setIsLiked(!isLiked);

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all hover:z-10  '>
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title || movie.name}
      />
      <div className='absolute inset-2 hover:bg-black/80 text-white opacity-0  hover:opacity-100 transition-all'>
        <p className='flex items-center justify-center font-bold whitespace-normal text-xs md:text-sm text-center h-full'>
          {movie.title || movie.name}
        </p>
        <p>
          {isLiked ? (
            <FaHeart
              className='absolute top-4 left-4 text-gray-400'
              onClick={likeClickHandler}
            />
          ) : (
            <FaRegHeart
              className='absolute top-4 left-4 text-gray-400'
              onClick={likeClickHandler}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
