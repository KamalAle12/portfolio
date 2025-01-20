import React from 'react';
import iot from '../../../assets/video/iotProject/iot.mp4';

const IotProject = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold font-mono text-center mb-6">IoT Projects Showcase</h1>
      <h2 className="text-2xl text-center mb-12 text-gray-300">
        Experience IoT Innovations!
      </h2>

      <div className="relative w-full h-80 md:h-[400px] lg:h-[500px]">
        <video
          src={iot} // Replace with your video path
          controls
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center justify-center">
            <span className="material-icons text-white mr-2">play_arrow</span> Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default IotProject;
