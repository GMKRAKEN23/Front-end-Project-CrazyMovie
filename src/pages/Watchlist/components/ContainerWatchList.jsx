import { useState, useEffect } from "react";
import { fetchMovieTitle } from '../../../api/titleApi';
import { fetchImageMovie } from '../../../api/imageMovie';
import { fetchMovieTime } from '../../../api/runTimeApi';
import { fetchMovieDate } from '../../../api/dateMovieApi';
import { fetchMovieRatings } from '../../../api/ratedApi';

function truncateTitle(title, maxLength) {
  
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + '...';
  }
  return title;
}

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
    <div className="w-full my-3 mb-20">
      <div>
        {favoriteMovies.map((movie, index) => (
          <div className="flex w-3/4 mx-auto my-10" key={index}>
            <div className="rounded-lg">
              <img src={movie.imageUrl} alt={movie.title} className="h-40 w-28 rounded-xl" />
            </div>
            <div className="flex flex-col justify-between ml-4">
              <h2 className="text-xl text-white text-wrap">{truncateTitle(movie.title, 10)}</h2>
              
              <div className="flex items-center">
                <i className='text-white bx bxs-time-five'></i> 
                <p className="ml-2 text-base text-white">{movie.duration} min.</p>
              </div>
              
              <div className="flex items-center">
                <i className='text-white bx bxs-calendar'></i>  
                <p className="ml-2 text-white">{movie.date}</p>
              </div>
              
              <div className="flex items-center w-20 cursor-pointer h-7 rounded-xl">
                <i className='px-1 text-base text-orange-600 bx bxs-star'></i>
                <p className="text-orange-600">{movie.rating.toFixed(1)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerWatchList;
