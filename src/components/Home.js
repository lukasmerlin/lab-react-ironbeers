import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Home() {
  return (
    <div>
    <Header />
      <h1>Welcome to IronBeers!</h1>
      <p>Choose an option:</p>
      <ul>
        <li><Link to="/beers">All Beers</Link></li>
        <li><Link to="/random-beer">Random Beer</Link></li>
        <li><Link to="/new-beer">New Beer</Link></li>
      </ul>
    </div>
  );
}

export default Home;
