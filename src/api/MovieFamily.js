async function fetchFamilyMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        const genresData = await genresResponse.json();
        const familyGenre = genresData.genres.find(genre => genre.name === "Family");
        if (!familyGenre) {
            throw new Error('The genre Family was not found.');
        }

        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${familyGenre.id}`);
        if (!response.ok) {
            throw new Error('The API request failed.');
        }
        const data = await response.json();
    
        const familyMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(familyGenre.id);
        });
        
        return familyMovies;
    } catch (error) {
        console.error('Error when recovering Family films:', error);
        throw error;
    }
}

export { fetchFamilyMovies };
