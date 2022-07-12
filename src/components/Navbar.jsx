const Navbar = () => {
  return (
    <header className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>
        KMFLIX
      </h1>
      <div>
        <button className=' text-white pr-4 '>Sign In</button>
        <button className='bg-red-600 text-white rounded px-6 py-2 '>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
