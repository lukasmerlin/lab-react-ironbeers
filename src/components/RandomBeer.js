import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header />
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
