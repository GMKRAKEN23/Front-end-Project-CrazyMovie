async function fetchScienceFictionMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        const genresData = await genresResponse.json();
        const scienceFictionGenre = genresData.genres.find(genre => genre.name === "Science Fiction");
        if (!scienceFictionGenre) {
            throw new Error('The Science Fiction genre was not found.');
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${scienceFictionGenre.id}`);
        if (!response.ok) {
            throw new Error('The API request failed.');
        }
        const data = await response.json();
        const scienceFictionMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(scienceFictionGenre.id);
        });
        return scienceFictionMovies;
    } catch (error) {
        console.error('Error retrieving Science Fiction movies :', error);
        throw error;
    }
}

export { fetchScienceFictionMovies };
