import React from 'react';
import { useFilmContext } from '../context/FilmsContext';
import Header from '../components/Header';

function Home() {
  const { films } = useFilmContext();

  return (
    <div>
      <Header />
      <h1>Films</h1>
      {films.map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <button>Favoritar Filme</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
