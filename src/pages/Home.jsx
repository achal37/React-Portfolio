import React from 'react';
import primeImage from '../assets/prime3.png';

const Home = () => (
  <div className="flex flex-col lg:flex-row text-white gap-x-4 py-4 px-8 justify-center items-center h-screen bg-gray-700">
    <div className="flex flex-col items-center w-full lg:w-1/2 text-center lg:text-left">
      <img src={primeImage} alt="Prime" className="w-40 h-40 rounded-lg mb-4" />
      <h1 className="text-2xl font-bold">Hi, I am Achal</h1>
      <p className="mt-2 text-gray-400">A brief introduction about who you are.</p>
    </div>
    <div className="flex flex-col justify-center w-full lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300">
        I am a passionate web developer with a love for creating beautiful and efficient user interfaces.
        I have experience with various technologies including React, JavaScript, and Tailwind CSS.
      </p>
      <p className="mt-4 text-gray-300">
        My goal is to continuously improve my skills and create meaningful digital experiences.
      </p>
    </div>
  </div>
);

export default Home;
