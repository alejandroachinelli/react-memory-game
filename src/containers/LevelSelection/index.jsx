import React from 'react';
import { WelcomeMessage, LevelMessage, LevelButton, Logout  } from '../../components';
import { GiBabyBottle, GiSwordsEmblem, GiNuclearPlant, GiStoneBlock } from 'react-icons/gi';
import useLoadUserName from '../../hooks/useLoadUserName';

const LevelSelection = () => {
  useLoadUserName('/', true);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <WelcomeMessage />
        <LevelMessage />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <LevelButton icon={<GiBabyBottle />} color="green" label="Easy" animalCount={9} />
          <LevelButton icon={<GiSwordsEmblem />} color="blue" label="Normal" animalCount={12} />
          <LevelButton icon={<GiNuclearPlant />} color="yellow" label="Hard" animalCount={15} />
          <LevelButton icon={<GiStoneBlock />} color="red" label="Very Hard" animalCount={18} />
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default LevelSelection;