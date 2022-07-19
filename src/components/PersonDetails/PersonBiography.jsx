import React from "react";

const PersonBiography = ({ classes, info }) => {
  return (
    <section className={classes}>
      <div className='text-left container mx-auto'>
        <h2 className='hidden lg:block text-4xl font-bold'>{info?.name}</h2>
        <div className='py-5 w-[80%] mt-2 mx-auto lg:mx-0'>
          <h2 className='text-2xl font-bold'>Biography</h2>
          <div className='bg-red-600 w-[50px] h-[2px] mt-1'></div>
          <p className='py-2 '>{info?.biography}</p>
        </div>
      </div>
    </section>
  );
};

export default PersonBiography;
