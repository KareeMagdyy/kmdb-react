import { BsFillStarFill } from "react-icons/bs";

const MovieHero = ({ movieDetails, movieVideos }) => {
  const randomVideo =
    movieVideos[Math.floor(Math.random() * movieVideos.length)]?.key;

  const timeConvert = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return (
      // num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s)."
      `${rhours}h ${rminutes}m`
    );
  };

  const youTubeURL = "https://www.youtube.com/embed/";
  return (
    <>
      <div className='w-full text-white'>
        <div className='relative'>
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
            alt='/'
            className='w-full object-cover h-[500px]'
          />
          <h1 className='absolute top-[50%] text-center left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl lg:text-6xl max-w-[25ch] font-bold z-10 select-none'>
            {movieDetails?.title || movieDetails?.name}
          </h1>
          <div className='bg-gradient-to-b from-black absolute w-full h-[400px] left-0 top-0'></div>
          <div className='bg-gradient-to-t from-black absolute w-full h-[300px] left-0 bottom-0'></div>
        </div>
        <div className='flex text-center flex-col gap-2 lg:flex-row lg:gap-10 p-6 text-gray-300 text-xl lg:text-2xl'>
          <div>
            <div className='flex items-center justify-center gap-2  '>
              <BsFillStarFill color='gold' size={20} />
              <p>{movieDetails.vote_average}/10</p>
            </div>
          </div>
          <h2>Released: {movieDetails?.release_date}</h2>
          <h2>Duration: {timeConvert(movieDetails?.runtime)}</h2>
        </div>
        <div className='flex items-center justify-center flex-col gap-20 lg:flex-row lg:justify-start w-full text-center p-4 top-[50%] lg:top-[35%]'>
          <img
            className='max-w-[300px] lg:w-[40%] px-4 mx-auto lg:mx-0'
            src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
            alt='/'
          />
          {movieVideos.length > 0 && (
            <iframe
              className='w-[90%] h-[400px] lg:w-[60%]'
              title={movieDetails?.title || movieDetails?.name}
              frameborder='0'
              src={youTubeURL + randomVideo}
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieHero;
