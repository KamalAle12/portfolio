import React, { useState } from 'react';
import { motion } from 'framer-motion';
import web1 from '../../../assets/images/webProject/web1.png';
import web2 from '../../../assets/images/webProject/web2.png';
import web3 from '../../../assets/images/webProject/web3.png';
import web4 from '../../../assets/images/webProject/web4.png';
import web5 from '../../../assets/images/webProject/web5.png';
import web6 from '../../../assets/images/webProject/web6.png';
import web7 from '../../../assets/images/webProject/web7.png';
import web8 from '../../../assets/images/webProject/web8.png';
import web9 from '../../../assets/images/webProject/web9.png';
import web10 from '../../../assets/images/webProject/web10.png';
import web11 from '../../../assets/images/webProject/web11.png';
import web12 from '../../../assets/images/webProject/web12.png';
import web13 from '../../../assets/images/webProject/web13.png';
import web14 from '../../../assets/images/webProject/web14.png';
import web15 from '../../../assets/images/webProject/web15.png';
import web16 from '../../../assets/images/webProject/web16.png';
import web17 from '../../../assets/images/webProject/web17.png';

const projects = [
  { image: web1, link: 'https://ar-web-xi.vercel.app/' },
  { image: web2, link: 'https://ar-web-xi.vercel.app/' },
  { image: web3, link: 'https://saas-landing-page-rho-rouge.vercel.app/' },
  { image: web4, link: 'https://saas-landing-page-rho-rouge.vercel.app/' },
  { image: web5, link: 'https://www.epictravellerr.com/' },
  { image: web6, link: 'https://www.epictravellerr.com/' },
  { image: web7, link: 'https://www.epictravellerr.com/' },
  { image: web8, link: 'https://www.epictravellerr.com/' },
  { image: web9, link: 'https://github.com/KamalAle12/Robot-Alarm' },
  { image: web10, link: 'https://terq.in/' },
  { image: web11, link: 'https://terq.in/' },
  { image: web12, link: 'https://github.com/KamalAle12' },
  { image: web13, link: 'https://github.com/KamalAle12' },
  { image: web14, link: 'https://github.com/KamalAle12' },
  { image: web15, link: 'https://github.com/KamalAle12' },
  { image: web16, link: 'https://github.com/KamalAle12' },
  { image: web17, link: 'https://github.com/KamalAle12' },
];

const WebProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id='project' className="p-8">
      <h1 className="text-4xl font-bold font-mono text-center mb-4">Project Showcase</h1>
      <h2 className="text-2xl text-center mb-8">Explore My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover cursor-pointer"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for full image with centered button */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <motion.img
              src={selectedProject.image}
              alt="Full-size project"
              className="max-w-full max-h-3/4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-600 transition duration-300"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              Visit Website
            </a>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition duration-300"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebProject;
