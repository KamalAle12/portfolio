import React from 'react'; 
import game1 from '../../../../assets/images/gameProjects/game1.png';
import game2 from '../../../../assets/images/gameProjects/game2.png';
import game3 from '../../../../assets/images/gameProjects/game3.png';
import game4 from '../../../../assets/images/gameProjects/game4.png';
import game5 from '../../../../assets/images/gameProjects/game5.png';
import game6 from '../../../../assets/images/gameProjects/game6.png';

const games = [
  { image: game1, title: 'Lost Home' },
  { image: game2, title: 'UFOs War' },
  { image: game3, title: 'Lost Home' },
  { image: game4, title: 'Solar system' },
  { image: game5, title: 'UFOs War' },
  { image: game6, title: 'Solar system' },
];

const GameProjects = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold font-mono text-center mb-6">Game Projects Showcase</h1>
      <h2 className="text-2xl text-center mb-12 text-gray-300">
        Dive into my world of games!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-700 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
              <a
                href="https://kamal-ale-magar.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameProjects;
