import { useEffect, useState } from "react";
import AccountShowsSlider from "../components/AccountShowsSlider";
import bgImg from "../assets/home-bg-lg.jpg";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Account = () => {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setUserDisplayName(doc.data()?.displayName);
    });
  }, [user?.email]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <div className='w-full text-white relative'>
        <img src={bgImg} alt='/' className='w-full h-[300px] object-cover' />

        <div className='bg-black/75 fixed w-full h-[300px] left-0 top-0'></div>
        <div className='bg-gradient-to-b from-black fixed w-full h-[120px] left-0 top-0'></div>
        <h1 className='text-3xl md:text-4xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center'>
          {userDisplayName}
        </h1>
      </div>
      <AccountShowsSlider movies={movies} title='Watch List' />
    </>
  );
};

export default Account;
