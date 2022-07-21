import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const SearchForm = ({ query, setQuery }) => {
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const searchIconClickHandler = () => {
    const searchInput = document.getElementById("home-search");
    searchInput.focus();
  };
  const closeIconClickHandler = () => {
    setQuery("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='relative'>
        <input
          id='home-search'
          type='text'
          placeholder='Movie Search'
          value={query}
          onChange={changeHandler}
          className=' w-full rounded-md shadow-sm bg-black/80 text-white border-white
            placeholder-white focus:border-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-50 px-4'
        />
        {query?.length > 0 ? (
          <IoIosClose
            size={25}
            className='absolute right-3 cursor-pointer text-white top-[50%] translate-y-[-50%]'
            onClick={closeIconClickHandler}
          />
        ) : (
          <BiSearchAlt2
            size={25}
            className='absolute right-3 cursor-pointer text-white top-[50%] translate-y-[-50%]'
            onClick={searchIconClickHandler}
          />
        )}
      </div>
    </form>
  );
};

export default SearchForm;
