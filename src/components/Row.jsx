import axios from "axios";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='absolute left-1 bg-white rounded-full opacity-40 hover:opacity-100 z-[15] cursor-pointer hidden group-hover:block'
        />
        <div
          id={`slider ${rowId}`}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='absolute right-1 bg-white rounded-full ml-2 opacity-40 hover:opacity-100 z-[15]  cursor-pointer hidden group-hover:block'
        />
      </div>
    </>
  );
};

export default Row;
