import React from 'react'; 
import profilePic from '../../assets/images/profile-pic.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <section id="profile" className="flex flex-col md:flex-row justify-center items-center gap-10 h-screen bg-[#ECECEC] text-black">
      <motion.div 
        className="flex h-140 w-128 ml-32 mr-32"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <img src={profilePic} alt="Kamal Ale Profile Picture" className="h-[400px] w-[400px] object-cover shadow-2xl" />
      </motion.div>

      <motion.div 
        className="self-center text-center md:text-left md:ml-20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <p className="text-center font-semibold text-lg">Hello, I'm</p>
        <h1 className="text-4xl text-center md:text-left">Kamal Ale Magar</h1>
        <p className="text-2xl mb-4">Software Engineer</p>

        <p className="mb-6">Just a regular computer science engineer, building crazy things!</p>

        <div className="flex justify-center md:justify-start gap-4">
          <motion.button 
            className="btn btn-color-1 hover:bg-white hover:text-black border border-1 border-black rounded-md bg-slate-600 p-2"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = './'}
          >
            View Projects
          </motion.button>
          <motion.button 
            className="btn btn-color-2 hover:bg-white hover:text-black border border-1 border-black rounded-md bg-slate-600 p-2"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = './'}
          >
            About Me
          </motion.button>
        </div>

        <motion.div 
          id="socials-container" 
          className="flex justify-center mt-6 md:justify-start gap-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img 
            src={linkedin} 
            alt="My linkedin profile" 
            className="icon cursor-pointer h-10 hover:scale-110 transition-transform duration-300"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/kamal-ale-magar-615b2622a/'}
          />
          <img 
            src={github} 
            alt="My github profile" 
            className="icon cursor-pointer h-10 hover:scale-110 transition-transform duration-300"
            onClick={() => window.location.href = 'https://github.com/KamalAle12'}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Main;
