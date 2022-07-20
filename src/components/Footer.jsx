import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='mt-16 py-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>
            KMFLIX
          </h1>
        </Link>
        <p className='text-lg'>
          Made With 💖 by{" "}
          <a
            href='https://karim.website/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline font-bold'
          >
            Karim Magdy
          </a>{" "}
          &copy; 2022
        </p>
        <div className='flex gap-2 text-red-600'>
          <a
            href='https://github.com/KareeMagdyy'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-all'
          >
            <FaGithubSquare size={35} />
          </a>
          <a
            href='https://www.linkedin.com/in/kareem-el-zomor-0a2a94150/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-all'
          >
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
