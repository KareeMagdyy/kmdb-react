import maleImg from "../../assets/no-img-male.jpg";
import femaleImg from "../../assets/no-img-female.jpg";
import { Link } from "react-router-dom";

const CastCard = ({ actor }) => {
  const truncateString = (str, n) => {
    return str.length > n ? `${str.slice(0, n)}..` : str;
  };
  return (
    <div className='rounded-xl overflow-hidden shadow-white/10 shadow-md  w-[140px]  inline-block mx-2 text-center  h-[280px]'>
      <div className='relative'>
        <Link to={`/person/${actor.id}`}>
          <img
            className=' w-full h-[210px] cursor-pointer'
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : actor.gender === 1
                ? femaleImg
                : actor.gender === 2
                ? maleImg
                : "https://via.placeholder.com/140x210?text=No+Image"
            }
            alt={actor.name}
            loading='lazy'
          />
        </Link>
        <div className='absolute bg-gradient-to-t from-black bottom-0 left-0 w-full h-[40px]'></div>
      </div>
      <Link to={`/person/${actor.id}`}>
        <p className=' p-2 text-white text-sm font-bold hover:underline hover:text-gray-400'>
          {truncateString(actor.name, 15)}
        </p>
      </Link>
      <p className='text-gray-300 px-2 pb-3 text-sm'>
        {truncateString(actor.character, 17)}
      </p>
    </div>
  );
};

export default CastCard;
