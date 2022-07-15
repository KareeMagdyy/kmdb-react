import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import unavailable from "../assets/image-unavailable.jpg";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = UserAuth();

  const navigate = useNavigate();
  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setIsLiked(!isLiked);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      navigate("/");
    }
  };

  return (
    <div className='w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all hover:z-[5]  '>
      <img
        className='w-full h-auto block'
        src={
          movie.backdrop_path !== null
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : unavailable
        }
        alt={movie.title || movie.name}
      />
      <div className='absolute inset-2 hover:bg-black/80 text-white opacity-0  hover:opacity-100 transition-all'>
        <p className='flex items-center justify-center font-bold whitespace-normal text-xs md:text-sm text-center h-full'>
          {movie.title || movie.name}
        </p>
        <p onClick={saveMovie}>
          {isLiked ? (
            <FaHeart className='absolute top-2 left-2 md:top-4 md:left-4 text-gray-400' />
          ) : (
            <FaRegHeart className='absolute top-2 left-2 md:top-4 md:left-4 text-gray-400' />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
