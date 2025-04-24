import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) setFavorites(JSON.parse(storedFavorites)); // Parse the string back to an array
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Convert the array to a string before storing it
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]); // Add the new movie to the array, 'prev' is the previous state
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId)); // Filter out the movie to be removed
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId); // Check if the movie is in the favorites array
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };

  return (
    <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
  );
};
