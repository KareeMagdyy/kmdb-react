import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import bgImg from "../assets/rows-red-seats-theater.jpg";
import Footer from "../components/Footer";
import Skeleton from "react-loading-skeleton";
import { BsArrowLeftCircle } from "react-icons/bs";

const MoviesGenre = () => {
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const key = process.env.REACT_APP_IMDB_API_KEY;
  const params = useParams();

  const getGenre = (genre) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMoviesByGenre(res.data.results))
      .then(
        setTimeout(() => {
          setIsLoading(false);
        }, 750)
      );
  };

  useEffect(() => {
    getGenre(params.genre);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genreTitle = params.genre.split(",")[0];

  const truncateString = (str, num) => {
    return str.length > num ? `${str.slice(0, num)}...` : str;
  };
  return (
    <>
      <div className='w-full h-[300px] relative'>
        <img className='w-full h-[300px] object-cover' src={bgImg} alt='/' />
        <div className='bg-black/75 absolute w-full h-[300px] left-0 top-0'></div>
        <div className='bg-gradient-to-b from-black absolute w-full h-[120px] left-0 top-0'></div>
        <div className='bg-gradient-to-t from-black absolute w-full h-[120px] left-0 bottom-0'></div>
        <div className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-2xl md:text-4xl font-black'>
          <BsArrowLeftCircle
            className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] mt-5  z-50 cursor-pointer'
            size={35}
            onClick={() => window.history.back()}
          />
          {isLoading ? (
            <Skeleton width={155} height={40} />
          ) : (
            <h1>{genreTitle}</h1>
          )}
        </div>
      </div>

      <div className='bg-black text-white container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-6 gap-5 mt-5 '>
        {isLoading ? (
          Array(20)
            .fill(0)
            .map((_, id) => <Skeleton key={id} height={300} />)
        ) : (
          <>
            {moviesByGenre.map((movie) => (
              <div
                key={movie?.id}
                className='rounded-xl overflow-hidden shadow-white/10 shadow-md'
              >
                <Link
                  to={`/movie/${movie.id}`}
                  className='relative cursor-pointer'
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt='/'
                    loading='lazy'
                  />

                  <div className='bg-gradient-to-t from-black absolute w-full h-[50px] left-0 bottom-0'></div>
                </Link>

                <div className=' h-[75px] flex items-center justify-center text-white text-center'>
                  <Link to={`/movie/${movie?.id}`}>
                    <h1 className='font-bold hover:underline hover:text-gray-300 cursor-pointer'>
                      {truncateString(movie?.title, 30)}
                    </h1>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MoviesGenre;
