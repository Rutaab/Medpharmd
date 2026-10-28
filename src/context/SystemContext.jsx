import React, { createContext, useContext, useState } from 'react';

const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
  const [system, setSystem] = useState('year');

  const toggleSystem = () => {
    setSystem(prev => prev === 'year' ? 'semester' : 'year');
  };

  return (
    <SystemContext.Provider value={{ system, toggleSystem }}>
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = () => useContext(SystemContext);
