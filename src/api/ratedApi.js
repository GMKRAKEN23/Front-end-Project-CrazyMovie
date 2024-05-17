async function fetchMovieRatings(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.vote_average !== undefined) {
            return data.vote_average;
        } else {
            throw new Error("Notes are not present in the API response.");
        }
    } catch (error) {
        console.error('Error retrieving movie ratings:', error);
        throw error;
    }
}

export { fetchMovieRatings };
