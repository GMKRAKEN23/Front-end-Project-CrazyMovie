async function fetchFantasyMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        const genresData = await genresResponse.json();
        const fantasyGenre = genresData.genres.find(genre => genre.name === "Fantasy");
        if (!fantasyGenre) {
            throw new Error('The Fantasy genre was not found.');
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${fantasyGenre.id}`);
        if (!response.ok) {
            throw new Error('The API request failed.');
        }
        const data = await response.json();
        const fantasyMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(fantasyGenre.id);
        });
        return fantasyMovies;
    } catch (error) {
        console.error('Error retrieving fantasy movies:', error);
        throw error;
    }
}

export { fetchFantasyMovies };