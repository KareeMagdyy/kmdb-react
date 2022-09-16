import { useState, useEffect } from "react";
import offline from "../assets/offline.svg";
import Footer from "../components/Footer";

const UserOffline = ({ children }) => {
  const [isOnline, setOnlineStatus] = useState(true);

  useEffect(() => {
    const setFromEvent = function (event) {
      if (event.type === "online") {
        setOnlineStatus(true);
      } else if (event.type === "offline") {
        setOnlineStatus(false);
      }
    };

    window.addEventListener("online", setFromEvent);
    window.addEventListener("offline", setFromEvent);

    return () => {
      window.removeEventListener("online", setFromEvent);
      window.removeEventListener("offline", setFromEvent);
    };
  });

  const pageReload = () => {
    window.location.reload();
    setOnlineStatus(window.navigator.onLine);
  };
  return (
    <>
      {isOnline && window.navigator.onLine ? (
        children
      ) : (
        <section className='h-screen  pt-10 container mx-auto'>
          <div className='h-full gap-24 flex flex-col lg:flex-row-reverse items-center justify-center'>
            <img
              src={offline}
              alt='404'
              className='md:max-w-[400px] lg:max-w-[500px]'
            />
            <div>
              <h1 className='text-white text-2xl font-bold'>Whooops!</h1>
              <p className='text-gray-400 text-lg py-1'>
                No Internet
                <br /> Please check your internet connection
              </p>
              <button
                className='text-white mt-5 rounded-lg border px-6 py-2 hover:bg-white hover:text-black transition-all font-bold'
                onClick={pageReload}
              >
                Retry
              </button>
            </div>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
};

export default UserOffline;
