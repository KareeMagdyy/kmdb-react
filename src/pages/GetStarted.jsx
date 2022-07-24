import bgImg from "../assets/rows-red-seats-theater.jpg";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <main>
      <div className='w-full h-screen absolute'>
        <img
          className=' object-cover w-full h-screen absolute'
          src={bgImg}
          alt='/'
        />
        <div className='bg-black/50 fixed inset-0'></div>
        <div className=' bg-gradient-to-b from-black/80 fixed inset-0'></div>
        <div className='fixed flex flex-col gap-4 h-screen justify-center items-center w-full  z-50 text-gray-200'>
          <h1 className='text-3xl w-[20ch] sm:text-4xl md:text-6xl text-center mx-auto font-black '>
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className='text-xl font-bold sm:text-2xl md:text-3xl'>
            Watch anywhere, anytime.
          </h2>
          <Link to='/signup'>
            <button className='bg-red-600 px-10 py-3 rounded mt-4 text-white'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;
