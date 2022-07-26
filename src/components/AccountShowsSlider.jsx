import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AccountShowsSlider = ({ movies, title }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className='container mx-auto'>
      <h2 className='text-white text-xl font-bold p-4 md:text-xl'>{title}</h2>
      {movies?.length < 1 ? (
        <h1 className='text-white text-xl font-bold p-4 md:text-lg min-h-[30vh]'>
          Your Watch List is Empty{" "}
        </h1>
      ) : (
        <div className='relative flex items-center group'>
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className='absolute left-1 bg-white rounded-full opacity-40 hover:opacity-100 z-[15] cursor-pointer hidden group-hover:block'
          />
          <div className='bg-gradient-to-r from-black h-full w-[50px] absolute left-0 top-0 z-[10]'></div>
          <div className='bg-gradient-to-l from-black h-full w-[50px] absolute right-0 top-0 z-[10]'></div>
          <div
            id={`slider`}
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
          >
            {movies?.map((movie) => (
              <div
                key={movie?.id}
                className='w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all hover:z-[5]  '
              >
                <Link to={`/movie/${movie.id}`}>
                  <img
                    loading='lazy'
                    className='w-full h-auto block'
                    src={
                      movie?.img
                        ? `https://image.tmdb.org/t/p/w500${movie?.img}`
                        : `https://via.placeholder.com/264x148.png/DC2638/fff?text=${movie?.title}`
                    }
                    alt={movie.title || movie.name}
                  />
                  <div className='absolute inset-2 hover:bg-black/80 text-white opacity-0  hover:opacity-100 transition-all'>
                    <p className='flex items-center justify-center font-bold whitespace-normal text-xs md:text-sm text-center h-full'>
                      {movie.title || movie.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className='absolute right-1 bg-white rounded-full ml-2 opacity-40 hover:opacity-100 z-[15]  cursor-pointer hidden group-hover:block'
          />
        </div>
      )}
    </section>
  );
};

export default AccountShowsSlider;
