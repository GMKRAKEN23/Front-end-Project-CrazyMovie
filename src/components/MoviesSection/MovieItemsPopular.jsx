import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/popularMovieApi';

function MovieItemsPopular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const popularMovies = await fetchPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films populaires:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {movies.slice(0, 18).map(movie => (
                <Link key={movie.id} to={`/detailsmovies/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full rounded-xl h-auto cursor-pointer" />
                </Link>
            ))}
        </div>
    );
}

export default MovieItemsPopular;
