import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import axios from "axios";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const scrollDownHandler = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className='w-full relative  h-[70vh] md:h-screen text-white  '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[55vh]  bg-gradient-to-b from-black'></div>
        <div className='absolute w-full h-[55vh] md:h-screen bottom-[-1px] bg-gradient-to-t from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='w-full absolute bottom-[5%] sm:bottom-[10%] p-4 md:p-8 container left-[50%] translate-x-[-50%]'>
          <h1 className='text-3xl md:text-5xl font-bold max-w-[25ch]'>
            {movie?.title}
          </h1>
          <Link to={`movie/${movie?.id}`}>
            <button className='border my-4 bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Watch Trailer
            </button>
          </Link>

          <p className='text-gray-400 text-small'>
            Released:{" "}
            {new Date(movie?.release_date).toLocaleDateString("en-GB")}
          </p>
          <p className='md:w-full hidden md:max-w-[70%] md:block lg:max-w-[50%] xl:max-w-[30%] text-gray-200 bg-black/60 rounded p-2'>
            {movie?.overview}
          </p>
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
