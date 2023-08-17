import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Home, LevelSelection, Game } from '../containers';


const Routes = () => {
  return (
    <Router>
        <Route path="/" element={<Home />} />
        <Route path="/level-selection" element={<LevelSelection />} />
        <Route path="/game" element={<Game />} />

    </Router>
  );
};

export default Routes;