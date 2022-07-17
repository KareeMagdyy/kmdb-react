import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PlainRow = ({ title, rowId, children, classes = "" }) => {
  const slideLeft = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft += 500;
  };
  return (
    <section className={`container mx-auto ${classes}`}>
      <h2 className='text-white font-bold px-2 pt-4 pb-2 md:text-xl'>
        {title}
      </h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='absolute left-1 bg-white rounded-full opacity-40 hover:opacity-100 z-[15] cursor-pointer hidden group-hover:block'
        />
        <div
          id={`slider ${rowId}`}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '
        >
          {children}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='absolute right-1 bg-white rounded-full ml-2 opacity-40 hover:opacity-100 z-[15]  cursor-pointer hidden group-hover:block'
        />
      </div>
    </section>
  );
};

export default PlainRow;
