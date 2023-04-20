import Header from "./Header";
import React, { useState } from 'react';

const NewBeerForm = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState('');
  const [contributed_by, setContributedBy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          tagline,
          description,
          first_brewed,
          brewers_tips,
          attenuation_level,
          contributed_by,
        }),
      });
      if (res.ok) {
        console.log('Beer created successfully!');
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel('');
        setContributedBy('');
      } else {
        console.log('Failed to create beer.');
      }
    } catch (err) {
      console.log('Error creating beer:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="tagline">Tagline:</label>
      <input type="text" id="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="first_brewed">First Brewed:</label>
      <input type="text" id="first_brewed" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)} />

      <label htmlFor="brewers_tips">Brewers Tips:</label>
      <input type="text" id="brewers_tips" value={brewers_tips} onChange={(e) => setBrewersTips(e.target.value)} />

      <label htmlFor="attenuation_level">Attenuation Level:</label>
      <input
        type="number"
        id="attenuation_level"
        value={attenuation_level}
        onChange={(e) => setAttenuationLevel(e.target.value)}
      />

      <label htmlFor="contributed_by">Contributed By:</label>
      <input
        type="text"
        id="contributed_by"
        value={contributed_by}
        onChange={(e) => setContributedBy(e.target.value)}
      />

      <button type="submit">Create Beer</button>
    </form>
  );
};

export default NewBeerForm;
