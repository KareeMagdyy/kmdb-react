import React from "react";
import PersonCast from "./PersonCast";
import PersonCrew from "./PersonCrew";

const PersonFilmography = ({ filmography }) => {
  return (
    <section className=' py-5 w-[85%] mt-2 mx-auto lg:mx-0'>
      <h2 className='text-2xl font-bold py-2 '>Filmography</h2>
      <div className='bg-red-600  w-[50px] h-[2px] '></div>
      {filmography?.cast?.length > 0 && (
        <PersonCast filmography={filmography} />
      )}
      {filmography?.cast?.length > 0 && filmography?.crew?.length > 0 && (
        <div className='bg-red-600  w-[40%] h-[2px] my-1'></div>
      )}
      {filmography?.crew?.length > 0 && (
        <PersonCrew filmography={filmography} />
      )}
    </section>
  );
};

export default PersonFilmography;
