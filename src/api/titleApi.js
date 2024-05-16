async function fetchMovieTitle(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.title !== undefined) {
            return data.title;
        } else {
            throw new Error("Titles not present in API response.");
        }
    } catch (error) {
        console.error('Error retrieving movie titles:', error);
        throw error;
    }
}

export { fetchMovieTitle };
