import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { BsFillStarFill, BsArrowLeftCircle } from "react-icons/bs";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

const MovieHero = ({ movieDetails, movieVideos, loading }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [movies, setMovies] = useState([]);
  const { user, setLastURL } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const youTubeURL = "https://www.youtube.com/embed/";
  const timeConvert = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
  };

  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setIsLiked(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movieDetails.id,
          title: movieDetails.title,
          img: movieDetails.backdrop_path,
        }),
      });
    } else {
      setLastURL(location);
      navigate("/login");
    }
  };
  const deleteShow = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieId, {
        savedShows: result,
      });
      setIsLiked(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  useEffect(() => {
    if (movies?.find((m) => m.id === movieDetails.id)) {
      setIsLiked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
  useEffect(() => {
    if (movies?.find((m) => m.id === movieDetails.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails]);

  return (
    <>
      <div className='w-full text-white'>
        <div className='relative '>
          <BsArrowLeftCircle
            className='absolute left-5 lg:left-10 top-32 md:top-20  z-50 cursor-pointer'
            size={35}
            onClick={() => window.history.back()}
          />
          <img
            src={
              loading
                ? "/"
                : `https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`
            }
            alt='/'
            className='w-full object-cover h-[500px] '
          />
          <div className='absolute top-[50%] text-center left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl lg:text-6xl max-w-[25ch] font-bold z-10 select-none'>
            {loading ? (
              <Skeleton width={250} />
            ) : (
              <h1>{movieDetails?.title || movieDetails?.name}</h1>
            )}
          </div>

          <div className='bg-gradient-to-b from-black absolute w-full h-[400px] left-0 top-0'></div>
          <div className='bg-gradient-to-t from-black absolute w-full h-[300px] left-0 bottom-0'></div>
        </div>
        <div className='flex text-center flex-col gap-2 lg:flex-row lg:gap-10 p-6 text-gray-300 text-xl lg:text-2xl container mx-auto'>
          <div>
            <div className='flex items-center justify-center gap-2  '>
              {loading ? (
                <Skeleton width={75} />
              ) : (
                <>
                  <BsFillStarFill color='gold' size={20} />
                  <p>{movieDetails?.vote_average?.toFixed(1) || "0"}/10</p>
                </>
              )}
            </div>
          </div>
          {movieDetails?.release_date && (
            <>
              {loading ? (
                <Skeleton width={120} />
              ) : (
                <h2>
                  Release:{" "}
                  {new Date(movieDetails?.release_date).toLocaleDateString(
                    "en-GB"
                  )}
                </h2>
              )}
            </>
          )}
          {loading ? (
            <Skeleton width={120} />
          ) : (
            <h2>Duration: {timeConvert(movieDetails?.runtime)}</h2>
          )}
        </div>
        <div className='flex items-center justify-center flex-col gap-20 lg:flex-row lg:justify-start w-full text-center p-4  container mx-auto'>
          <div className='w-[300px] relative '>
            {loading ? (
              <Skeleton height={300} />
            ) : (
              <>
                <div className='absolute top-[-9px] left-[-15px] cursor-pointer hover:text-gray-200 transition-all z-10'>
                  {!isLiked ? (
                    <span onClick={saveMovie}>
                      <MdBookmarkAdd size={75} />
                    </span>
                  ) : (
                    <span onClick={() => deleteShow(movieDetails?.id)}>
                      <MdBookmarkAdded size={75} />
                    </span>
                  )}
                </div>
                <div className='bg-gradient-to-b from-black/50 absolute w-full h-[200px] left-0 top-0'></div>

                <img
                  className='max-w-full   mx-auto lg:mx-0 rounded-lg'
                  src={
                    movieDetails?.poster_path !== null
                      ? `https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`
                      : `https://via.placeholder.com/300x400.png/DC2638/fff?text=${movieDetails.title}`
                  }
                  alt={movieDetails.title}
                />
              </>
            )}
          </div>
          {movieVideos.length > 0 && (
            <div className='w-[90%] h-[400px] lg:w-[65%] '>
              {loading ? (
                <Skeleton height={300} />
              ) : (
                <iframe
                  title={movieVideos[0]?.name}
                  width='100%'
                  height='100%'
                  frameBorder='0'
                  loading='eager'
                  src={`${youTubeURL}${movieVideos[0]?.key}`}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieHero;
