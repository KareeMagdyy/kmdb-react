import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/rows-red-seats-theater.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [err, setErr] = useState("");
  const { signUp, lastURL, setLastURL } = UserAuth();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signUp(email, password, firstName, lastName);
      !lastURL ? navigate("/") : navigate(lastURL.pathname);
      setLastURL("");
    } catch (error) {
      console.log(error.code);
      setErr(error.code);
    }
  };

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
            <div className='py-10 max-w-[320px] mx-auto'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              {err === "auth/email-already-in-use" && (
                <p className='bg-red-800 rounded font-bold p-2 mt-3'>
                  Email Already Exist
                </p>
              )}
              {err === "auth/weak-password" && (
                <p className='bg-red-800 rounded font-bold p-2 mt-3'>
                  Weak Password
                </p>
              )}
              <form
                onSubmit={submitHandler}
                className='flex flex-col py-4 w-full'
              >
                <div className='lg:d-flex w-full'>
                  <input
                    className='p-3 w-full lg:w-[48%] my-2 bg-gray-700 rounded'
                    type='text'
                    placeholder='First Name'
                    autoComplete='first name'
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <input
                    className='p-3 w-full lg:ml-[4%] lg:w-[48%] my-2 bg-gray-700 rounded'
                    type='text'
                    placeholder='Last Name'
                    autoComplete='last name'
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>

                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button className='bg-red-600 font-bold py-3 my-4 rounded'>
                  Sign Up
                </button>
                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <label className='select-none'>
                    <input
                      className='mr-1 w-[.8rem] h-[0.8rem] checked:bg-red-600 text-red-600  focus:ring-0 border-0  '
                      type='checkbox'
                    />{" "}
                    Remember me
                  </label>
                  <p>Need Help?</p>
                </div>
                <p className='py-4 mt-2 text-center'>
                  <span className='text-gray-500 mr-1 '>
                    Already have an account
                  </span>{" "}
                  <Link to='/login'>Sign In</Link>
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

export default Signup;
