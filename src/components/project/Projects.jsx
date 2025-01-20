import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import ar1 from '../../assets/video/arProjects/ar1.mp4'
import ar2 from '../../assets/video/arProjects/ar2.mp4'
import ar3 from '../../assets/video/arProjects/ar3.mp4'
import ar4 from '../../assets/video/arProjects/ar4.mp4'
import ar5 from '../../assets/video/arProjects/ar5.mp4'
import ar6 from '../../assets/video/arProjects/ar6.mp4'
import ar7 from '../../assets/video/arProjects/ar7.mp4'
import ar8 from '../../assets/video/arProjects/ar8.mp4'
import ar9 from '../../assets/video/arProjects/ar9.mp4'
import ar10 from '../../assets/video/arProjects/ar10.mp4'
import ar11 from '../../assets/video/arProjects/ar11.mp4'
import ar12 from '../../assets/video/arProjects/ar12.mp4'
import arProject from '../../assets/video/arProjects/arProject.png'  // Corrected to image format
import arProject1 from '../../assets/video/arProjects/arProject1.png'  // Corrected to image format

const projects = [
  { type: 'Web Development', videos: ['web1.mp4', 'web2.mp4', 'web3.mp4'] },
  { type: 'AR Projects', videos: [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11, ar12, arProject, arProject1] },
  { type: 'Java Projects', videos: ['java1.mp4', 'java2.mp4', 'java3.mp4'] },
  { type: 'Game Projects', videos: ['game1.mp4', 'game2.mp4', 'game3.mp4'] }
];

const ProjectSection = ({ title, videos }) => (
  <motion.div
    className="my-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          className="relative bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-dashed border-gray-300"
          whileHover={{ scale: 1.1 }}
        >
          {video.endsWith('.mp4') ? (
            <video
              src={video}
              className="object-cover w-full h-full"
              loop
              muted
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={video}
              alt={`Project ${index}`}
              className="object-cover w-full h-full"
            />
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="bg-[#ECECEC] text-black py-12">
    {projects.map(({ type, videos }) => (
      <ProjectSection key={type} title={type} videos={videos} />
    ))}
  </section>
);

export default Projects;
