import React from 'react';
import java1 from '../../../assets/images/javaProjects/java1.png';
import java2 from '../../../assets/images/javaProjects/java2.png'
import java3 from '../../../assets/images/javaProjects/java3.png'
import java4 from '../../../assets/images/javaProjects/java4.png'
import java5 from '../../../assets/images/javaProjects/java5.png'
import java6 from '../../../assets/images/javaProjects/java6.png'
import java7 from '../../../assets/images/javaProjects/java7.jpg'
import java8 from '../../../assets/images/javaProjects/java8.jpg'

const projects = [
  { image: java1, title: 'Robot PathFinding Simulation' },
  { image: java2, title: 'Network Routing Simulator' },
  { image: java3, title: 'Chess Game' },
  { image: java4, title: 'Epic Traveller Website Backend' },
  { image: java5, title: 'Traveller Website Blog Backend' },
  { image: java6, title: 'Social Media Application' },
  { image: java7, title: 'Hundred Days DSA Mobile App' },
  { image: java8, title: 'Hundred Days DSA Mobile App' },
];

const JavaProjects = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold font-mono text-center mb-6">Java Projects Showcase</h1>
      <h2 className="text-2xl text-center mb-12">Discover My Java Projects</h2>

      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg shadow-lg ${
              index % 2 === 0 ? 'col-span-1 row-span-2' : 'col-span-2 row-span-1'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-lg">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JavaProjects;
