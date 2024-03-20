import Header from '../components/Header';
import { useFilmContext } from '../context/FilmsContext';
import Heart from '../components/Heart';

export default function Favorites() {
  const { films } = useFilmContext();

  return (
    <div>
      <Header />
      <h1>Favoritos</h1>
      {films.filter((film) => film.favorite).map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <Heart enabled={ film.favorite } />
          <button
            onClick={ () => { film.favorite = !film.favorite; } }
          >
            Favoritar Filme
          </button>
        </div>
      ))}
    </div>
  );
}
