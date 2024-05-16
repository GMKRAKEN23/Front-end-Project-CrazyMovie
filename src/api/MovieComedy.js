async function fetchComedyMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        const genresData = await genresResponse.json();
        const comedyGenre = genresData.genres.find(genre => genre.name === "Comedy");
        if (!comedyGenre) {
            throw new Error('The comedy genre was not found.');
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${comedyGenre.id}`);
        if (!response.ok) {
            throw new Error('The API request failed.');
        }
        const data = await response.json();
        const comedyMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(comedyGenre.id);
        });
        return comedyMovies;
    } catch (error) {
        console.error('Error recovering comedy movies:', error);
        throw error;
    }
}

export { fetchComedyMovies };