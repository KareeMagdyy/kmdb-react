import { useEffect, useState } from "react";
import SavedShow from "../components/SavedShow";
import bgImg from "../assets/home-bg-lg.jpg";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Account = () => {
  const [userDisplayName, setUserDisplayName] = useState("");

  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setUserDisplayName(doc.data()?.displayName);
    });
  }, [user?.email]);

  return (
    <>
      <div className='w-full text-white'>
        <img src={bgImg} alt='/' className='w-full h-[300px] object-cover' />
        <div className='bg-black/75 fixed w-full h-[300px] left-0 top-0'></div>
        <div className='bg-gradient-to-b from-black fixed w-full h-[120px] left-0 top-0'></div>
        <div className='absolute top-[25%] md:top-[30%] left-0 p-4 '>
          <h1 className='text-2xl md:text-3xl font-bold'>
            Hello {userDisplayName}
          </h1>
        </div>
      </div>
      <SavedShow />
    </>
  );
};

export default Account;
