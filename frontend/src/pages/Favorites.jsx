import "../css/Favorties.css"; // Import the CSS file for styling
import { useMovieContext } from "../contexts/MovieContext"; // Import the MovieContext to access favorite movies
import MovieCard from "../components/MovieCard"; // Import the MovieCard component to display each movie

function Favorites() {
  const { favorites } = useMovieContext(); // Get the list of favorite movies from the context

  if (favorites) {
    return (
      <div className="favorites-list">
        <h2>Your Favorites</h2>
        <div class="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
