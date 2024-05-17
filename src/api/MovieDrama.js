async function fetchDramaMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        const genresData = await genresResponse.json();
        const drameGenre = genresData.genres.find(genre => genre.name === "Drama");
        if (!drameGenre) {
            throw new Error('The Drama genre was not found.');
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${drameGenre.id}`);
        if (!response.ok) {
            throw new Error('The API request failed.');
        }
        const data = await response.json();
        const actionMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(drameGenre.id);
        });
        return actionMovies;
    } catch (error) {
        console.error('Error while recovering Drama movies:', error);
        throw error;
    }
}

export { fetchDramaMovies };
