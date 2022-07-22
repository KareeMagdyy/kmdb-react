import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-1 items-start justify-between p-4 z-[100] absolute w-full container left-[50%] translate-x-[-50%]'>
      <Link to='/'>
        <h1 className='text-red-600 text-3xl md:text-4xl font-bold cursor-pointer '>
          KMFLIX
        </h1>
      </Link>
      {!user ? (
        <div className='col-start-[-1]'>
          <Link to='/login'>
            <button className=' text-white pr-4 '>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 text-white rounded px-4 sm:px-6 py-2 '>
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <>
          <SearchBar classes='col-start-1 col-span-2 md:col-span-1 md:col-start-auto lg:col-span-2' />
          <div className='row-start-1 col-start-2 md:col-start-3 lg:col-start-4 ml-auto'>
            <Link to='/account'>
              <button className=' text-white pr-4 '>Account</button>
            </Link>
            <button
              onClick={logOutHandler}
              className='bg-red-600 text-white rounded px-4 sm:px-6 py-2 '
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
