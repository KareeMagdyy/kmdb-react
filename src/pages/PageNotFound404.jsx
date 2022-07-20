import { Link } from "react-router-dom";
import notFound from "../assets/404.svg";

const PageNotFound404 = () => {
  return (
    <section className='h-screen  pt-10 container mx-auto'>
      <div className='h-full gap-5  flex flex-col lg:flex-row-reverse items-center justify-center'>
        <img src={notFound} alt='404' className='lg:max-w-[750px]' />
        <div>
          <h1 className='text-white text-2xl font-bold'>Whooops!</h1>
          <p className='text-gray-400 text-lg py-1'>
            Sorry, the page you are looking for doesn't exist
          </p>
          <Link to='/'>
            <button className='text-white mt-5 rounded-lg border px-6 py-2 hover:bg-white hover:text-black transition-all font-bold'>
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound404;
