import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
      );
      setBeers(data);
    };
    fetchBeers();
  }, [searchQuery]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchQueryChange} />
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <a href={`/beers/${beer._id}`}>Details</a>
        </div>
      ))}
    </div>
  );
}

export default BeerList;
