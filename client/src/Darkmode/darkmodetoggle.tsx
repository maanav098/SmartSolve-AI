import React from 'react';
import { useDarkMode } from './darkmodecontext';
import './dark.css';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="toggle">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} aria-label="Toggle Futuristic Mode" />
      <span className="slider" />
      <span className="label">{darkMode ? 'Futuristic' : 'Standard'}</span>
    </label>
  );
};

export default DarkModeToggle;
