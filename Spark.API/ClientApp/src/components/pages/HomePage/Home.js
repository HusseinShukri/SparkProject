import React from 'react';
import Cards from '../../Cards';
import HeroSection from '../../HeroSection';
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Cards/>
      <HeroSection {...homeObjFour} />

    </>
  );
}

export default Home;