async function fetchMovieTime(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.runtime!== undefined) {
            return data.runtime;
        } else {
            throw new Error("Movie time durations are not present in the API response.");
        }
    } catch (error) {
        console.error('Error when retrieving movie durations:', error);
        throw error;
    }
}

export { fetchMovieTime };
