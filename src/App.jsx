import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import customData from './data/cities.json';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import './App.css';

function App() {
  const [cities, setCities] = useState(customData);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index path="cities" element={<CityList cities={cities} />} />
          <Route path="countries" element={<CountryList cities={cities} />} />
          <Route path="form" element={<></>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
