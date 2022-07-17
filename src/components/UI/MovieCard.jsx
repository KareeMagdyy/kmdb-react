import { Link } from "react-router-dom";

const MovieCard = ({ movie, img }) => {
  if (!img) {
    return;
  }

  return (
    <div className='w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all hover:z-[5]  '>
      <Link to={`/movie/${movie.id}`}>
        <img
          className='w-full h-auto max-h-[350px] block'
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={movie.title || movie.name}
        />

        <div className='absolute inset-2 hover:bg-black/80 text-white opacity-0  hover:opacity-100 transition-all'>
          <p className='flex items-center justify-center font-bold whitespace-normal text-xs md:text-sm text-center h-full select-none'>
            {movie.title || movie.name}
          </p>
          {/* <p onClick={saveMovie}>
            {isLiked ? (
              <FaHeart className='absolute top-2 left-2 md:top-4 md:left-4 text-gray-400 ' />
            ) : (
              <FaRegHeart className='absolute top-2 left-2 md:top-4 md:left-4 text-gray-400' />
            )}
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
