import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLink,
} from "react-icons/fa";

const PersonSideBar = ({ info, social, classes }) => {
  const ageCalc = (date1, date2) => {
    let date1Year = new Date(date1).getFullYear();
    let date2Year = new Date(date2).getFullYear();

    if (date1Year > date2Year) {
      return date1Year - date2Year;
    } else {
      return date2Year - date1Year;
    }
  };

  return (
    <div className={classes}>
      <img
        className='w-[300px] max-w-[100%] h-[450px] mx-auto lg:mx-0 rounded-xl'
        src={`https://image.tmdb.org/t/p/w500${info?.profile_path}`}
        alt={info?.name}
      />
      <h1 className='text-4xl font-bold py-4 lg:hidden'>{info?.name}</h1>
      {(social?.facebook_id !== null ||
        social?.instagram_id !== null ||
        social?.twitter_id !== null ||
        info?.homepage) && (
        <div className='flex items-center gap-3 justify-center lg:justify-start lg:pt-6 text-white '>
          {social.facebook_id !== null && (
            <a
              className='hover:text-red-600 transition-all'
              href={`https://www.facebook.com/${social.facebook_id}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookSquare size={27} />
            </a>
          )}
          {social.instagram_id !== null && (
            <a
              className='hover:text-red-600 transition-all'
              href={`https://www.instagram.com/${social.instagram_id}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagramSquare size={27} />
            </a>
          )}
          {social.twitter_id !== null && (
            <a
              className='hover:text-red-600 transition-all'
              href={`https://twitter.com/${social.twitter_id}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitterSquare size={27} />
            </a>
          )}
          {info.homepage && (
            <a
              className='hover:text-red-600 transition-all'
              href={info.homepage}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLink size={27} />
            </a>
          )}
        </div>
      )}
      <div className='text-left py-5 w-[85%] mt-2 mx-auto lg:mx-0'>
        <h2 className='text-2xl font-medium py-1'>Personal Info</h2>
        <div className='bg-red-600 w-[50px] h-[2px] mb-3'></div>
        <div className='py-2'>
          <p className='font-bold text-lg'>Known For</p>
          <p>{info?.known_for_department}</p>
        </div>
        <div className='py-2'>
          <p className='font-bold text-lg'>Gender</p>
          <p>
            {info?.gender === 2
              ? "Male"
              : info?.gender === 1
              ? "Female"
              : "Unspecified"}
          </p>
        </div>
        <div className='py-2'>
          <p className='font-bold text-lg'>Birthday</p>
          <p>{new Date(info?.birthday).toLocaleDateString("en-GB")}</p>
        </div>
        {info?.deathday !== null && (
          <div className='py-2'>
            <p className='font-bold text-lg'>Day of Death </p>
            <p>
              {new Date(info?.deathday).toLocaleDateString("en-GB")}
              <br /> ({ageCalc(info?.deathday, info?.birthday)}) years old
            </p>
          </div>
        )}
        {info?.deathday === null && (
          <div className='py-2'>
            <p className='font-bold text-lg'>Age</p>
            <p>{ageCalc(new Date(), info?.birthday)} years old</p>
          </div>
        )}
        <div className='py-2'>
          <p className='font-bold text-lg'>Place of Birth </p>
          <p>{info?.place_of_birth}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonSideBar;
