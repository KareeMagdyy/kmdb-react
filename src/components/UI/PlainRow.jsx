import { useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

const PlainRow = ({ title, rowId, children, classes = "" }) => {
  const location = useLocation();
  const slideLeft = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft += 500;
  };

  useEffect(() => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollTo({ left: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <section className={`container mx-auto ${classes}`}>
        {title && (
          <h2 className='text-white font-bold px-2 pt-4 pb-2 md:text-xl'>
            {title}
          </h2>
        )}

        <div className='relative flex items-center group'>
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className='absolute left-1 bg-white rounded-full opacity-40 hover:opacity-100 z-[15] cursor-pointer hidden group-hover:block'
          />
          <div className='bg-gradient-to-r from-black h-full w-[50px] absolute left-[-3px] top-0 z-[10]'></div>
          <div className='bg-gradient-to-l from-black h-full w-[50px] absolute right-[-3px] top-0 z-[10]'></div>
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
    </>
  );
};

export default PlainRow;
