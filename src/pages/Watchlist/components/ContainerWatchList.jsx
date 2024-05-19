import { useState, useEffect } from "react";
import { fetchMovieTitle } from '../../../api/titleApi'; 

function ContainerWatchList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    async function fetchTitles() {
      const moviesWithTitles = await Promise.all(favorites.map(async id => {
        const title = await fetchMovieTitle(id);
        return { id, title };
      }));
      setFavoriteMovies(moviesWithTitles);
    }

    fetchTitles();
  }, []);

  return (
    <div className="w-full my-10">
      <ul>
        {favoriteMovies.map((movie, index) => (
          <li className="text-white" key={index}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContainerWatchList;
