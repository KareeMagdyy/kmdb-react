import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className='w-full relative  h-[55vh] md:h-screen text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-screen bg-gradient-to-b from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='w-full absolute bottom-[5%] sm:bottom-[10%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-small'>
            Released:{" "}
            {new Date(movie?.release_date).toLocaleDateString("en-GB")}
          </p>
          <p className='md:w-full hidden md:max-w-[70%] md:block lg:max-w-[50%] xl:max-w-[30%] text-gray-200 bg-black/60 rounded p-2'>
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
