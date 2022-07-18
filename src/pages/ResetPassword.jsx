import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/home-bg-lg.jpg";

const ResetPassword = () => {
  const { forgotPassword } = UserAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await forgotPassword(email);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      setError(error.code);
      console.log(error.code);
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
          <div className='max-w-[450px] h-[80vh] mx-auto bg-black/75 text-white rounded-2xl relative'>
            <div className='py-16 max-w-[320px] mx-auto '>
              <form
                className='flex max-w-[320px] flex-col py-4 w-full absolute top-[50%] translate-y-[-50%]'
                onSubmit={submitHandler}
              >
                <h1 className='text-3xl font-bold text-center mb-5'>
                  Password Reset
                </h1>
                {error === "auth/user-not-found" && (
                  <p className='bg-red-800 rounded font-bold p-3 mt-4'>
                    Invalid Email
                  </p>
                )}
                {success && (
                  <p className='bg-green-700 rounded font-bold p-3 mt-4'>
                    Password Reset Link Sent!
                  </p>
                )}
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='bg-red-600 font-bold py-3 my-6 rounded'>
                  Reset
                </button>
                <p className='py-4 mt-6 text-center'>
                  <span className='text-gray-500 mr-1 '>New to Kmflix?</span>{" "}
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

export default ResetPassword;
