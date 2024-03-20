import React, { createContext, useContext, useEffect, useState } from 'react';

type Film = {
  id: string;
  title: string;
  director: string;
  release_date: string;
  description: string;
  image: string;
  favorite: boolean;
};

type FilmContextType = {
  films: Film[];
};

const FilmContext = createContext<FilmContextType | undefined>(undefined);

export const useFilmContext = () => {
  const context = useContext(FilmContext);
  if (!context) {
    throw new Error('useFilmContext must be used within a FilmContextProvider');
  }
  return context;
};

function FilmContextProvider({ children }: { children: React.ReactNode }) {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <FilmContext.Provider value={ { films } }>
      {children}
    </FilmContext.Provider>
  );
}

export default FilmContextProvider;
