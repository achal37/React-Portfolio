import React, { useState } from 'react';
import { motion } from 'framer-motion';
import primeImage from '../assets/ProfilePic.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";
import Navbar from '../components/Navbar';
import Contact from './Contact';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar toggleModal={toggleModal} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col lg:flex-row text-white gap-8 px-8 lg:px-16 py-10 justify-center items-center min-h-screen bg-custom-green-dark font-sans"
      >
        
        <motion.div 
          className="flex flex-col items-center w-full lg:w-1/2 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={primeImage} 
            alt="Achal" 
            className="w-3/4 lg:w-2/3 rounded-full mb-6 p-16 transition-transform duration-300 hover:scale-105"
          />
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/achal37" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-white text-3xl hover:text-custom-teal transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/achaltiwari" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-white text-3xl hover:text-custom-teal transition duration-300" />
            </a>
            <a href="https://twitter.com/achal_37" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-white text-3xl hover:text-custom-teal transition duration-300" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col justify-center w-full lg:w-1/2 p-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-custom-teal mb-4">
            Hello, I'm Achal!
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            I'm an aspiring web developer with a passion for creating dynamic web applications.
            I specialize in backend technologies and love solving complex problems.
          </p>
          <div className="flex gap-x-4 space-y-4">
            <a 
              href="https://drive.google.com/file/d/1HJPXtxHunQTJUvPFRkdld53gAgmdiwL6/view?usp=sharing" 
              download 
              className="bg-custom-teal flex text-custom-green-dark rounded hover:bg-custom-light-blue transition duration-300"
              aria-label="Download CV"
            >
              <MdOutlineFileDownload className='text-4xl font-bold px-2'/>
              <p className='pr-2 py-2 font-semibold'>Download CV</p>
            </a>
          </div>
        </motion.div>
        {isOpen && <Contact toggleModal={toggleModal} />}
      </motion.div>
    </div>
  );
};

export default Home;
