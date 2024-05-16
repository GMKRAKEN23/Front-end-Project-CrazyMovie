async function fetchActionMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        const genresData = await genresResponse.json();
        const actionGenre = genresData.genres.find(genre => genre.name === "Action");
        if (!actionGenre) {
            throw new Error('The Action genre was not found.');
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${actionGenre.id}`);
        if (!response.ok) {
            throw new Error('The API request failed.');
        }
        const data = await response.json();
        const actionMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(actionGenre.id);
        });
        return actionMovies;
    } catch (error) {
        console.error('Error recovering action movies:', error);
        throw error;
    }
}

export { fetchActionMovies };
