import { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from '../../api/TopRatedMovieApi';

function TopRatedMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const TopRatedMovies = await fetchTopRatedMovies ();
                setMovies(TopRatedMovies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films populaires:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {movies.slice(0, 18).map(movie => (
                <img key={movie.id} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full rounded-xl h-auto cursor-pointer" />
            ))}
        </div>
    );

}

export default TopRatedMovie;