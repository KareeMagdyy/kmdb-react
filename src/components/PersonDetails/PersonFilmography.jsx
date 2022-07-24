import React from "react";
import PersonCast from "./PersonCast";
import PersonCrew from "./PersonCrew";
import Skeleton from "react-loading-skeleton";

const PersonFilmography = ({ filmography, loading }) => {
  return (
    <section className=' py-5 w-[85%] mt-2 mx-auto lg:mx-0'>
      {loading ? (
        <Skeleton width={150} height={30} />
      ) : (
        <>
          <h2 className='text-2xl font-bold py-2 '>Filmography</h2>
          <div className='bg-red-600  w-[50px] h-[2px] '></div>
        </>
      )}
      {filmography?.cast?.length > 0 && (
        <PersonCast filmography={filmography} loading={loading} />
      )}
      {filmography?.cast?.length > 0 &&
        filmography?.crew?.length > 0 &&
        !loading && <div className='bg-red-600  w-[40%] h-[2px] my-1'></div>}
      {filmography?.crew?.length > 0 && (
        <PersonCrew filmography={filmography} loading={loading} />
      )}
    </section>
  );
};

export default PersonFilmography;
