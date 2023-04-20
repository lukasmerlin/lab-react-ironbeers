import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BeerList from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeerForm from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeerForm />} />
        <Route exact path="/beers/:beerId" element={<BeerDetails />} />

      </Routes>
    </Router>
  );
}

export default App;


