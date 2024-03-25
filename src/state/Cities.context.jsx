import { createContext, useContext, useState } from 'react';
import customData from '../data/cities.json';

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(customData);
  const [currentCity, setCurrentCity] = useState({});

  const getCity = id => setCurrentCity(customData.find(x => x.id === Number(id)));

  const createCity = newCity => setCities(cities => [...cities, newCity]);

  return (
    <CitiesContext.Provider value={{ cities, currentCity, getCity, createCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
};

export { CitiesProvider, useCities };
