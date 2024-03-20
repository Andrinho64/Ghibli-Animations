import React from 'react';
import { useFilmContext } from '../context/FilmsContext';
import Header from '../components/Header';
import Heart from '../components/Heart';

function Home() {
  const { films } = useFilmContext();

  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <div>
      <Header />
      <h1>Films</h1>
      {films.map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <Heart enabled={ film.favorite } />
          <button
            onClick={ () => {
              film.favorite = !film.favorite;
              forceUpdate();
            } }
          >
            Favoritar Filme
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
