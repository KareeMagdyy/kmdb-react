import React from "react";

const CastCard = ({ img, name, character }) => {
  const truncateString = (str, n) => {
    return str.length > n ? `${str.slice(0, n)}..` : str;
  };
  return (
    <div className='rounded-xl overflow-hidden shadow-white/10 shadow-md min-w-[140px] w-[140px]  inline-block mx-2 text-center  '>
      <img
        className=' w-full '
        src={`https://image.tmdb.org/t/p/w500${img}`}
        alt={name}
        loading='lazy'
      />
      <p className=' p-2 text-white text-sm font-bold'>
        {truncateString(name, 15)}
      </p>
      <p className='text-gray-300 px-2 pb-3 text-sm'>{character}</p>
    </div>
  );
};

export default CastCard;
