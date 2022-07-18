import maleImg from "../../assets/no-img-male.jpg";
import femaleImg from "../../assets/no-img-female.jpg";

const CastCard = ({ img, name, character, gender }) => {
  const truncateString = (str, n) => {
    return str.length > n ? `${str.slice(0, n)}..` : str;
  };
  return (
    <div className='rounded-xl overflow-hidden shadow-white/10 shadow-md min-w-[140px] w-[140px]  inline-block mx-2 text-center  '>
      <div className='relative'>
        <img
          className=' w-full h-[210px]'
          src={
            img
              ? `https://image.tmdb.org/t/p/w500${img}`
              : gender === 1
              ? femaleImg
              : gender === 2
              ? maleImg
              : "https://via.placeholder.com/140x210?text=No+Image"
          }
          alt={name}
          loading='lazy'
        />
        <div className='absolute bg-gradient-to-t from-black bottom-0 left-0 w-full h-[40px]'></div>
      </div>

      <p className=' p-2 text-white text-sm font-bold'>
        {truncateString(name, 15)}
      </p>
      <p className='text-gray-300 px-2 pb-3 text-sm'>
        {truncateString(character, 17)}
      </p>
    </div>
  );
};

export default CastCard;
