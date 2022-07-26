import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/rows-red-seats-theater.jpg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setErr(error.code);
    }
  };

  let errHandling = null;

  if (err === "auth/user-not-found") {
    errHandling = (
      <p className='bg-red-800 rounded font-bold p-3 mt-4'>Invalid Email</p>
    );
  } else if (err === "auth/wrong-password") {
    errHandling = (
      <p className='bg-red-800 rounded font-bold p-3 mt-4'>Invalid Password</p>
    );
  } else if (err === "auth/user-disabled") {
    errHandling = (
      <p className='bg-red-800 rounded font-bold p-3 mt-4'>
        This Email is suspended contact support
      </p>
    );
  } else {
    errHandling = null;
  }

  return (
    <>
      <div className='w-full h-screen absolute'>
        <img
          className=' object-cover w-full h-screen absolute'
          src={bgImg}
          alt='/'
        />
        <div className='bg-black/50 fixed inset-0'></div>
        <div className=' bg-gradient-to-b from-black/80 fixed inset-0'></div>
        <div className='fixed w-full px-4 py-24 z-50 '>
          <div className='max-w-[450px] h-[80vh] mx-auto bg-black/75 text-white rounded-2xl'>
            <div className='py-16 max-w-[320px] mx-auto'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {errHandling}
              <form
                onSubmit={submitHandler}
                className='flex flex-col py-4 w-full'
              >
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-red-600 font-bold py-3 my-6 rounded'>
                  Sign In
                </button>
                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <label className='select-none'>
                    <input
                      className='mr-1 w-[.8rem] h-[0.8rem] checked:bg-red-600 text-red-600  focus:ring-0 border-0  '
                      type='checkbox'
                    />{" "}
                    Remember me
                  </label>
                  <Link to='/reset-password'>
                    <p className='hover:underline cursor-pointer'>
                      Forgot my Password!
                    </p>
                  </Link>
                </div>
                <p className='py-4 mt-6 text-center'>
                  <span className='text-gray-500 mr-1 '>New to KMDB?</span>{" "}
                  <Link to='/signup'>Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
