import { createContext, useState } from 'react';
import customData from '../data/cities.json';

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(customData);

  return <CitiesContext.Provider value={{ cities }}>{children}</CitiesContext.Provider>;
};

export { CitiesProvider };
