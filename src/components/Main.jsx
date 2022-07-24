import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const scrollDownHandler = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const truncateString = (str, n) =>
    str?.length > n ? `${str.slice(0, n)}...` : str;

  useEffect(() => {
    axios
      .get(requests.popular)
      .then((res) => setMovies(res.data.results))
      .then(
        setTimeout(() => {
          setIsLoading(false);
        }, 1500)
      );
  }, []);

  return (
    <div className='w-full relative  h-[70vh] md:h-screen text-white  '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[55vh]  bg-gradient-to-b from-black'></div>
        <div className='absolute w-full h-[55vh] md:h-screen bottom-[-1px] bg-gradient-to-t from-black'></div>
        <img
          className={`w-full h-full object-cover ${
            isLoading ? `hidden` : `block`
          }`}
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='w-full absolute bottom-[5%] sm:bottom-[10%] p-4 md:p-8 container left-[50%] translate-x-[-50%]'>
          {isLoading ? (
            <div className='max-w-[25ch]'>
              <Skeleton width={250} height={50} />
            </div>
          ) : (
            <h1 className='text-3xl md:text-5xl font-bold max-w-[25ch]'>
              {movie?.title}
            </h1>
          )}

          {isLoading ? (
            <div className='w-[25%] md:w-[15%]  my-4  '>
              <Skeleton height={30} />
            </div>
          ) : (
            <Link to={`movie/${movie?.id}`}>
              <button className='border my-4 rounded-md bg-gray-300 text-black border-gray-300 py-2 px-5'>
                Watch Trailer
              </button>
            </Link>
          )}

          {isLoading ? (
            <Skeleton width={120} />
          ) : (
            <p className='text-gray-400 text-small'>
              Released:{" "}
              {new Date(movie?.release_date).toLocaleDateString("en-GB")}
            </p>
          )}

          {isLoading ? (
            <div className='md:w-full hidden md:max-w-[70%] md:block lg:max-w-[50%] xl:max-w-[30%]'>
              <Skeleton count={4} />
            </div>
          ) : (
            <p className='md:w-full hidden md:max-w-[70%] md:block lg:max-w-[50%] xl:max-w-[30%] text-gray-200 bg-black/60 rounded p-2'>
              {truncateString(movie?.overview, 240)}
            </p>
          )}
        </div>
        <div
          className='text-white hidden md:block absolute bottom-[3%] left-[50%] translate-x-[-50%] animate-bounce cursor-pointer'
          onClick={scrollDownHandler}
        >
          <BsArrowDownCircle size={30} />
        </div>
      </div>
    </div>
  );
};

export default Main;
