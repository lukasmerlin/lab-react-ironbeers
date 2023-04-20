import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

const BeerDetails = () => {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);

  return (
    <div className="beer-details-container">
        <Header />
      <img src={beer.image_url} alt={beer.name} />
      <div className="beer-details-info">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>
          <strong>First brewed:</strong> {beer.first_brewed}
        </p>
        <p>
          <strong>Attenuation level:</strong> {beer.attenuation_level}
        </p>
        <p>{beer.description}</p>
        <p>
          <strong>Contributed by:</strong> {beer.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default BeerDetails;
