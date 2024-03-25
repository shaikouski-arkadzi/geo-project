import { createContext, useContext, useState } from 'react';
import customData from '../data/cities.json';

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(customData);

  return <CitiesContext.Provider value={{ cities }}>{children}</CitiesContext.Provider>;
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
};

export { CitiesProvider, useCities };
