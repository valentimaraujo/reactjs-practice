import React, { useState, useEffect } from 'react';

export default function App () {
  const [repositories, setRepositories] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://reqres.in/api/users?per_page=50');
      const res = await response.json();
      setRepositories(res.data);
    };
    fetchData();

  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  const handleAddRepository = () => {
    const rand = Math.floor(Math.random() * 1000);
    setRepositories([...repositories, { id: rand, first_name: `repo-test ${rand}` }])
  };

  const handleFavorite = (id) => {
    const repositoriesFavorite = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(repositoriesFavorite);
  };

  const handlePositionReceived = ({coords}) => {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      ==>> LATITUDE: {location.latitude} <br />
      ==>> LONGITUDE: {location.longitude}
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.first_name.padEnd(20, `-`)} {repo.favorite ? '(Favorite)' : ''}
            <small style={{ "color": "blue" }}>
              <a onClick={() => handleFavorite(repo.id)}>
                {!repo.favorite ? 'Add ' : 'Remove'} Favorite
              </a>
            </small>
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>
        Add Repository
      </button>
    </>
  )
}
