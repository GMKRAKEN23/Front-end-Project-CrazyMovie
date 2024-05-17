async function fetchMovieGenre(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.genres && Array.isArray(data.genres) && data.genres.length > 0) {

            const maxGenres = data.genres.slice(0, 1);
            const genreNames = maxGenres.map(genre => genre.name);

            return genreNames.join(', ');
            
        } else {
            throw new Error("No gender found in API response.");
        }
    } catch (error) {
        console.error('Error when retrieving movie genres:', error);
        throw error;
    }
}

export { fetchMovieGenre };
