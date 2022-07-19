import React, { useState } from "react";

const PersonBiography = ({ info }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const showMoreLess = (str) => {
    return !isShowingMore && str?.length > 300
      ? `${str?.slice(0, 300)}...`
      : str;
  };

  const toggleShowHandler = () => setIsShowingMore(!isShowingMore);
  return (
    <section>
      <div className='text-left container mx-auto'>
        <h2 className='hidden lg:block text-4xl font-bold'>{info?.name}</h2>
        <div className='py-5 w-[85%] mt-2 mx-auto lg:mx-0'>
          <h2 className='text-2xl font-bold'>Biography</h2>
          <div className='bg-red-600 w-[50px] h-[2px] mt-1'></div>
          <p className='py-2 '>
            {showMoreLess(info?.biography)}{" "}
            {info?.biography?.length > 300 && (
              <span
                className='underline cursor-pointer text-md ml-2 text-red-600 transition-all hover:text-gray-500'
                onClick={toggleShowHandler}
              >
                {!isShowingMore ? "Read More" : "Read Less"}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonBiography;
