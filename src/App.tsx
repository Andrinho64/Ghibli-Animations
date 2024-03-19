import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmContextProvider from './context/FilmsContext';

function App() {
  return (
    <FilmContextProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </FilmContextProvider>
  );
}

export default App;
