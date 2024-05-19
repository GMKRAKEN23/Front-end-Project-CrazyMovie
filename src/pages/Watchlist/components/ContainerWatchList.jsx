import { useState, useEffect } from "react";
import { fetchMovieTitle } from '../../../api/titleApi';
import { fetchImageMovie } from '../../../api/imageMovie';
import { fetchMovieTime } from '../../../api/runTimeApi';
import { fetchMovieDate } from '../../../api/dateMovieApi';
import { fetchMovieRatings } from '../../../api/ratedApi';

function ContainerWatchList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    async function fetchMovieDetails() {
      const moviesWithDetails = await Promise.all(favorites.map(async id => {
        const title = await fetchMovieTitle(id);
        const imageUrl = await fetchImageMovie(id);
        const duration = await fetchMovieTime(id);
        const date = await fetchMovieDate(id);
        const rating = await fetchMovieRatings(id);
        return { id, title, imageUrl, duration, date, rating };
      }));
      setFavoriteMovies(moviesWithDetails);
    }

    fetchMovieDetails();
  }, []);

  return (
    <div className="w-full my-10">
      <div>
        {favoriteMovies.map((movie, index) => (
          <div className="flex my-10" key={index}>
            <div>
              <img src={movie.imageUrl} alt={movie.title} className="w-40 h-40" />
            </div>
            <h2 className="text-lg text-white">{movie.title}</h2>
            <p className="text-white">{movie.date}</p>
            <div className="flex items-center w-20 cursor-pointer h-7 rounded-xl">
              <i className='px-1 text-base text-orange-600 bx bxs-star'></i>
              <p className="text-orange-600">{movie.rating}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerWatchList;
