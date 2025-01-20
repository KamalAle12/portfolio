import React from 'react';

const Modal = ({ isOpen, onClose, image, text }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <button 
          className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full" 
          onClick={onClose}
        >
          X
        </button>
        <img 
          src={image} 
          alt={text} 
          className="w-full h-auto object-cover"
        />
        <p className="mt-4 text-center text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default Modal;
