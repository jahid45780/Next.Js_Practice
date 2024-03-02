import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className=' text-2xl text-center' > WelCome to next level data fatching   </h1>

      <Link href='posts' >
      <button className=' btn' > Post </button>
      </Link>

    </div>
  );
};

export default HomePage;